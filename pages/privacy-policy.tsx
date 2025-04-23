import { Getprivacypolicy } from "@/api/functions/privacypolicy.api";
import Wrapper from "@/layout/wrapper/Wrapper";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import { LinearProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

export const TermsWrapper = styled(Box)`
  .title_block {
    padding: 300px 0 50px;
    @media (max-width: 899px) {
      padding: 180px 0 100px;
    }
  }
  .terms_content {
    h2 {
      margin-bottom: 35px;
    }
    p {
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      a {
        color: ${primaryColors.primary};
      }
    }
  }
  .heading2 {
    font-size: 40px;
  }
  h3 {
    margin-bottom: 10px;
  }
  ul {
    list-style: disc;
    padding-left: 40px;
    margin-bottom: 30px;
    li {
      list-style: disc;
      &:not(:last-child) {
        margin-bottom: 12px;
      }
    }
  }
`;

const Index = () => {
  const router = useRouter();
  const slug = router?.route;
  console.log("Slug name:-", slug);
  const {
    data: privacypolicy,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["privacy-policy", { slug }],
    queryFn: () => Getprivacypolicy(slug),
    enabled: !!slug
  });

  // Loading
  if (isLoading)
    return (
      <>
        <LinearProgress />
      </>
    );

  // Error
  if (isError)
    return (
      <>
        <Typography variant="h3">Error Found </Typography>
      </>
    );
  return (
    <Wrapper>
      <Container fixed>
        <TermsWrapper>
          <Box className="title_block">
            <Typography variant="h1">
              {privacypolicy?.data?.title?.slice(0, 8)}{" "}
              <Typography variant="caption" className="red_span">
                {privacypolicy?.data?.title?.slice(8)}
              </Typography>
            </Typography>
          </Box>
          <Box
            className="terms_content"
            dangerouslySetInnerHTML={{ __html: privacypolicy?.data?.content }}
          ></Box>
        </TermsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Index;

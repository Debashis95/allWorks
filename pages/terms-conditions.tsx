import { Gettermconditions } from "@/api/functions/termscondition.api";
import Wrapper from "@/layout/wrapper/Wrapper";
import { LinearProgress } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { TermsWrapper } from "./privacy-policy";

const Index = () => {
  const router = useRouter();
  const slug = router?.route;
  console.log("Slug name:-", slug);
  // get data from API
  const {
    data: termconditiondetails,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["terms-conditions", { slug }],
    queryFn: () => Gettermconditions(slug),
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
              {termconditiondetails?.data?.title?.slice(0, 8)}{" "}
              <Typography variant="caption" className="red_span">
                {termconditiondetails?.data?.title?.slice(8)}
              </Typography>
            </Typography>
          </Box>
          <Box
            className="terms_content"
            dangerouslySetInnerHTML={{
              __html: termconditiondetails?.data?.content
            }}
          ></Box>
        </TermsWrapper>
      </Container>
    </Wrapper>
  );
};

export default Index;

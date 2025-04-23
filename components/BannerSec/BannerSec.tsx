import { LandingpageData } from "@/interface/landingpage.interface";
import assest from "@/json/assest";
import { primaryColors } from "@/themes/_muiPalette";
import styled from "@emotion/styled";
import Box, { BoxProps } from "@mui/material/Box";
import Button from "@mui/material/Button";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Image from "next/image";

import React from "react";

export const BannerSecWrapper = styled(Box)`
  position: relative;
  padding: 250px 0 200px;
  @media (max-width:1599px) {
    padding: 250px 0 65px;
  }
  @media (max-width: 899px) {
    padding: 200px 0 0;
  }
  .banner_image {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 5;
    width: 48vw;
    @media (max-width: 899px) {
      width: 35vw;
    }
  }
  .banner_round_image {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 4;
    width: 60vw;
  }

  .banner_content {
    max-width: 499px;
    position: relative;
    z-index: 10;
    h1 {
      margin-bottom: 10px;
      @media (max-width: 599px) {
        margin-bottom: 20px;
      }
      .red_span {
        color: ${primaryColors?.primary};
        font-weight: 700;
      }
      span {
        font-weight: 400;
      }
    }
    > p {
      margin-bottom: 30px;
    }
    .MuiChip-root {
      margin-bottom: 20px;
      height: 38px;
      border-radius: 90px;
      .MuiChip-label {
        padding: 0 30px;
        font-size: 14px;
        font-weight: 600;
        font-family: "Quicksand";
      }
    }
    .social_links {
      a {
        transition: all 0.5s ease;

        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &:hover {
          transform: scale(1.1);
        }
        @media (max-width: 599px) {
          width: 100%;
          padding: 0;
          justify-content: flex-start;
          &:not(:last-child) {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`;

interface bannerProps extends BoxProps {
  landingbanner?: LandingpageData;
}

const BannerSec: React.FC<bannerProps & BoxProps> = ({
  landingbanner,
  ...props
}) => {
  return (
    <BannerSecWrapper {...props}>
      <img src={assest?.bannerImage2} alt="" className="banner_image" />
      <img src={assest?.round} alt="" className="banner_round_image" />
      <Container fixed>
        <Box>
          <Grid container spacing={0}>
            <Grid xs={12}>
              <Box className="banner_content">
                <Chip
                  label={landingbanner?.banner_text_1}
                  variant="filled"
                  color="primary"
                />
                <Typography variant="h1">
                  <Typography variant="caption" className="red_span">
                    {landingbanner?.banner_text_1?.slice(0, 8)}
                  </Typography>{" "}
                  {landingbanner?.banner_text_1?.slice(8, 16)}
                  <Typography variant="caption">
                    {landingbanner?.banner_text_1?.slice(16)}
                  </Typography>
                </Typography>
                {props?.children}
                <Stack
                  direction="row"
                  alignItems="center"
                  flexWrap="wrap"
                  className="social_links"
                >
                  <a
                    href={landingbanner?.play_store_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button disableRipple>
                      <Image
                        src={assest?.google_play}
                        alt="icon"
                        width={200}
                        height={65}
                      />
                    </Button>
                  </a>
                  <a
                    href={landingbanner?.app_store_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button disableRipple>
                      <Image
                        src={assest?.apple_store}
                        alt="icon"
                        width={200}
                        height={65}
                        
                      />
                    </Button>
                  </a>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </BannerSecWrapper>
  );
};

export default BannerSec;

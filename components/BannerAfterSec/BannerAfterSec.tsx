/* eslint-disable react/no-array-index-key */
import { LandingpageData } from "@/interface/landingpage.interface";
import { primaryColors } from "@/themes/_muiPalette";
import ClientIcon from "@/ui/Icons/ClientIcon";
import InfoIcon from "@/ui/Icons/InfoIcon";
import TrustIcon from "@/ui/Icons/TrustIcon";
import styled from "@emotion/styled";
import Box, { BoxProps } from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";

export const BannerAfterSecWrapper = styled(Box)`
  padding-top: 150px;
  position: relative;
  z-index: 10;
  @media (max-width: 1499px) {
    padding-top: 100px;
  }
  @media (max-width: 899px) {
    padding-top: 80px;
  }
`;
export const EachCardWrapper = styled(Box)`
  padding: 80px 30px;
  background: ${primaryColors?.color383838};
  box-shadow: 0px 14.19px 43.66px rgba(0, 0, 0, 0.13);
  border-radius: 15px;
  @media (max-width: 899px) {
    padding: 30px 30px;
    margin-top: 20px;
  }

  h3 {
    font-size: 20px;
    margin-bottom: 20px;
  }
  .poly_gon {
    margin-bottom: 50px;
    margin-top: -115px;
    @media (max-width: 899px) {
      margin-bottom: 0px;
      margin-top: -60px;
    }
  }
`;

interface cardProps extends BoxProps {
  title: string | undefined;
  description: string | undefined;
  icon: React.ReactNode;
}

export const EachCard: React.FC<cardProps & BoxProps> = ({
  title,
  description,
  icon,
  ...props
}) => {
  return (
    <EachCardWrapper {...props}>
      <Typography variant="caption" className="poly_gon">
        {icon}
      </Typography>
      <Typography variant="h3">{title}</Typography>
      <Typography>{description}</Typography>
    </EachCardWrapper>
  );
};

interface props extends BoxProps {
  landingbanneraftersec?: LandingpageData;
}

const BannerAfterSec: React.FC<props & BoxProps> = ({
  landingbanneraftersec,
  ...props
}) => {
  const {
    box_1_header,
    box_2_header,
    box_3_header,
    box_1_text,
    box_2_text,
    box_3_text
  } = landingbanneraftersec || {};
  const cardList = [
    {
      icon: <InfoIcon />,
      title: box_1_header || "Header 1",
      description: box_1_text || "Default 1"
    },
    {
      icon: <ClientIcon />,
      title: box_2_header || "Header 2",
      description: box_2_text || "Default 2"
    },
    {
      icon: <TrustIcon />,
      title: box_3_header || "Header 3",
      description: box_3_text || "Default 3"
    }
  ];

  return (
    <BannerAfterSecWrapper {...props}>
      <Container fixed>
        <Grid
          container
          columnSpacing={{ md: 4, xs: 0 }}
          rowSpacing={{ md: 0, xs: 3 }}
        >
          {cardList?.map((data, index) => (
            <Grid item md={4} xs={12} key={index}>
              <EachCard {...data} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </BannerAfterSecWrapper>
  );
};

export default BannerAfterSec;

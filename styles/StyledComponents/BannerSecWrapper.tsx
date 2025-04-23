import { primaryColors } from "@/themes/_muiPalette";
import { Box, styled } from "@mui/system";

export const BannerSecWrapper = styled(Box)`
  position: relative;
  padding: 250px 0 200px;
  @media (max-width: 899px) {
    padding: 200px 0 0;
  }
  .banner_image {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 5;
    width: 60vw;
    @media (max-width: 899px) {
      width: 50vw;
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

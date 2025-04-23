import { AddcontactNow } from "@/api/functions/contact.api";
import useNotiStack from "@/hooks/useNotistack";
import { LandingpageData } from "@/interface/landingpage.interface";
import validationText from "@/json/messages/validationText";
import { emailRegex } from "@/lib/regex";
import { primaryColors } from "@/themes/_muiPalette";
import InputFieldCommon from "@/ui/CommonInput/CommonInput";
import CustomButtonPrimary from "@/ui/CustomButtons/CustomButtonPrimary";
import styled from "@emotion/styled";
import { yupResolver } from "@hookform/resolvers/yup";
import { Box, BoxProps, Container, Grid, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export const OutdoorWrap = styled(Box)`
  .outDoor_outr {
    background-color: ${primaryColors.secondary};
    padding: 52px 65px;

    border-radius: 50px;
    @media (max-width: 599px) {
      padding: 25px;
    }
    h2 {
      margin-bottom: 10px;
      span {
        color: ${primaryColors.primary};
        display: inline-block;
        font-weight: 700;
      }
    }
    .out_lft {
      margin-top: 55px;
      @media (max-width: 899px) {
        margin-top: 0px;
        margin-bottom: 25px;
      }
      p {
        max-width: 500px;
      }
    }
  }
  .form_grp {
    margin-bottom: 15px;
    button {
      padding: 26px 45px;
      @media (max-width: 600px) {
        padding: 20px 20px;
      }
      p {
        font-size: 18px;
      }
    }
  }
`;

interface feautesAppProps extends BoxProps {
  contactdetails: LandingpageData;
}
type Inputs = {
  name: string;
  email: string;
  message: string;
};

const schema = yup
  .object({
    full_name: yup.string().required(validationText.error.fullName),
    email: yup
      .string()
      .trim()
      .email(validationText.error.email_format)
      .required(validationText.error.enter_email)
      .matches(emailRegex, validationText.error.email_format),
    message: yup.string().required(validationText.error.message)
  })
  .required();

export type ContactSchemaFormData = yup.InferType<typeof schema>;
export default function Outdoor({ contactdetails, ...props }: feautesAppProps) {
  const { toastSuccess, toastError } = useNotiStack();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
    mode: "all",
    defaultValues: {
      email: "",
      full_name: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactSchemaFormData) => {
    try {
      const response = await AddcontactNow(data);
      if (response?.statusCode === 200) {
        toastSuccess(response?.message);
        reset();
      } else {
        toastError(response?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <OutdoorWrap>
      <Container fixed>
        <Box className="outDoor_outr">
          <Grid container spacing={2}>
            <Grid item xs={12} md={7}>
              <Box className="out_lft">
                <Typography variant="h2">
                  <span>{contactdetails?.contact_hdr?.slice(6, 18)} </span>{" "}
                  {contactdetails?.contact_hdr?.slice(25)}
                </Typography>
                <Typography variant="body1">
                  {contactdetails?.contact_content}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Box className="out_rgt">
                  <Box className="form_grp">
                    <InputFieldCommon
                      placeholder="Full Name"
                      {...register("full_name")}
                      error={!!errors.full_name}
                      helperText={errors.full_name?.message}
                    />
                  </Box>
                  <Box className="form_grp">
                    <InputFieldCommon
                      placeholder="Email Address"
                      {...register("email")}
                      error={!!errors.email}
                      helperText={errors.email?.message}
                    />
                  </Box>
                  <Box className="form_grp">
                    <InputFieldCommon
                      placeholder="Description"
                      {...register("message")}
                      error={!!errors.message}
                      helperText={errors.message?.message}
                    />
                  </Box>
                  <Box className="form_grp">
                    <CustomButtonPrimary
                      color="primary"
                      type="submit"
                      variant="contained"
                    >
                      <Typography variant="body1">Submit</Typography>
                    </CustomButtonPrimary>
                  </Box>
                </Box>
              </form>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </OutdoorWrap>
  );
}

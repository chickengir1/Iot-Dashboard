import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { formControl } from "../redux/actions/formAction";
import { Box, useMediaQuery } from "@mui/material";
import FooterLinks from "../components/footerlinks/FooterLinksContainer";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
  BlueRoundedButton,
} from "../styles/index";
import { utilsFormField } from "../utils/formUtils";
import { signupFormFields } from "../utils/formFields";
import EmailSelectorContainer from "../components/emailSelector/EmailSelectorContainer";

const RegisterForm = ({ onSubmit, register, errors }) => (
  <Box component="form" onSubmit={onSubmit}>
    <EmailSelectorContainer />
    {signupFormFields.map((field) => utilsFormField(field, register, errors))}
    <BlueRoundedButton
      type="submit"
      variant="contained"
      fullWidth
      sx={{ marginTop: "12px" }}
    >
      회원가입
    </BlueRoundedButton>
  </Box>
);

export const MobileRegister = ({ onSubmit, register, errors }) => (
  <MobileEntryLayout>
    <Box sx={{ border: "solid 1px #ddd", height: "250px" }}>
      <img alt="이미지" />
    </Box>
    <RegisterForm onSubmit={onSubmit} register={register} errors={errors} />
    <FooterLinks link1={"/"} text2={"로그인 하러 가기"} link2={"/"} />
  </MobileEntryLayout>
);

export const DesktopRegister = ({ onSubmit, register, errors }) => (
  <DesktopEntryLayout>
    <DesktopEntryMainLayout>
      <Box sx={{ border: "solid 1px #ddd", height: "250px" }}>
        <img alt="이미지" />
      </Box>
      <RegisterForm onSubmit={onSubmit} register={register} errors={errors} />
      <FooterLinks link1={"/"} text2={"로그인 하러 가기"} link2={"/"} />
    </DesktopEntryMainLayout>
  </DesktopEntryLayout>
);

const SignUpPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const combined = useForm();

  const onSubmit = (data) => {
    const completeEmail = `${data.email}@${data.domain}`;

    dispatch(formControl("signupId", data.id));
    dispatch(formControl("signupPassword", data.password));
    dispatch(formControl("confirmPassword", data.confirmPassword));
    dispatch(formControl("email", completeEmail));

    console.log("데이터", {
      ...data,
      // 합친 이메일 데이터
      completeEmail,
    });
  };

  return (
    <FormProvider {...combined}>
      {isDesktop ? (
        <DesktopRegister
          onSubmit={combined.handleSubmit(onSubmit)}
          register={combined.register}
          errors={combined.formState.errors}
        />
      ) : (
        <MobileRegister
          onSubmit={combined.handleSubmit(onSubmit)}
          register={combined.register}
          errors={combined.formState.errors}
        />
      )}
    </FormProvider>
  );
};

export default SignUpPage;

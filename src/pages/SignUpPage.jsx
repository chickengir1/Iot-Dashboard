import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setFormData } from "../redux/actions/formAction";
import { Box, useMediaQuery } from "@mui/material";
import FooterLinks from "../components/footerlinks/FooterLinksContainer";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
  BlueRoundedButton,
} from "../styles/index";
import { signupFormFields } from "../utils/formFields";
import { utilsFormField } from "../utils/formUtils";
import EmailSelectorContainer from "../components/emailSelector/EmailSelectorContainer";

const RegisterForm = ({ onSubmit, register, errors, watch }) => (
  <Box component="form" onSubmit={onSubmit}>
    <EmailSelectorContainer />
    {signupFormFields.map((field) =>
      utilsFormField(field, register, errors, watch)
    )}
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

export const MobileRegister = ({ onSubmit, register, errors, watch }) => (
  <MobileEntryLayout>
    <Box sx={{ border: "solid 1px #ddd", height: "250px" }}>
      <img alt="이미지" />
    </Box>
    <RegisterForm
      onSubmit={onSubmit}
      register={register}
      errors={errors}
      watch={watch}
    />
    <FooterLinks link1={"/"} text2={"로그인 하러 가기"} link2={"/"} />
  </MobileEntryLayout>
);

export const DesktopRegister = ({ onSubmit, register, errors, watch }) => (
  <DesktopEntryLayout>
    <DesktopEntryMainLayout>
      <Box sx={{ border: "solid 1px #ddd", height: "250px" }}>
        <img alt="이미지" />
      </Box>
      <RegisterForm
        onSubmit={onSubmit}
        register={register}
        errors={errors}
        watch={watch}
      />
      <FooterLinks link1={"/"} text2={"로그인 하러 가기"} link2={"/"} />
    </DesktopEntryMainLayout>
  </DesktopEntryLayout>
);

const SignUpPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const combined = useForm(); // 'combined'을 watch와 함께 사용
  const { watch } = combined; // watch 함수 추출

  const onSubmit = (data) => {
    const completeEmail = `${data.email}@${data.domain}`;

    const formData = {
      id: data.id,
      password: data.password,
      confirmPassword: data.confirmPassword,
      email: completeEmail,
    };

    dispatch(setFormData("signup", formData));
    console.log("데이터", formData);
  };

  return (
    <FormProvider {...combined}>
      {isDesktop ? (
        <DesktopRegister
          onSubmit={combined.handleSubmit(onSubmit)}
          register={combined.register}
          errors={combined.formState.errors}
          watch={watch} // watch 전달
        />
      ) : (
        <MobileRegister
          onSubmit={combined.handleSubmit(onSubmit)}
          register={combined.register}
          errors={combined.formState.errors}
          watch={watch} // watch 전달
        />
      )}
    </FormProvider>
  );
};

export default SignUpPage;

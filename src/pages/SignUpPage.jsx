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
} from "../styles/index";
import { signupFormFields } from "../utils/formFields";
import { generateFields } from "../utils/generateFields";

export const MobileRegister = ({
  onSubmit,
  register,
  errors,
  watch,
  formFields,
}) => (
  <MobileEntryLayout>
    <Box sx={{ border: "solid 1px #ddd", minHeight: "250px" }}>
      <img alt="이미지" />
    </Box>
    {generateFields({ formFields, onSubmit, register, errors, watch })}
    <FooterLinks link1={"/"} text2={"로그인 하러 가기"} link2={"/"} />
  </MobileEntryLayout>
);

export const DesktopRegister = ({
  onSubmit,
  register,
  errors,
  watch,
  formFields,
}) => (
  <DesktopEntryLayout>
    <DesktopEntryMainLayout>
      <Box sx={{ border: "solid 1px #ddd", minHeight: "250px" }}>
        <img alt="이미지" />
      </Box>
      {generateFields({ formFields, onSubmit, register, errors, watch })}
      <FooterLinks link1={"/"} text2={"로그인 하러 가기"} link2={"/"} />
    </DesktopEntryMainLayout>
  </DesktopEntryLayout>
);

const SignUpPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");
  const dispatch = useDispatch();
  const combined = useForm();
  const { watch } = combined;

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
          formFields={signupFormFields}
          onSubmit={combined.handleSubmit(onSubmit)}
          register={combined.register}
          errors={combined.formState.errors}
          watch={watch}
        />
      ) : (
        <MobileRegister
          formFields={signupFormFields}
          onSubmit={combined.handleSubmit(onSubmit)}
          register={combined.register}
          errors={combined.formState.errors}
          watch={watch}
        />
      )}
    </FormProvider>
  );
};

export default SignUpPage;

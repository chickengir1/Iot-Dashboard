import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setFormData } from "../redux/actions/formAction";
import { Box, useMediaQuery, Snackbar, Alert } from "@mui/material";
import FooterLinks from "../components/footerlinks/FooterLinksContainer";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
} from "../styles/index";
import { signupFormFields } from "../utils/formFields";
import { generateFields } from "../utils/generateFields";
import usePostRequest from "../hooks/usePostRequest";
import { getResponseMessage } from "../error/getResponseMessage";

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
  // 노티 관련 부분 컴포넌트로 추출
  const [alertMessage, setAlertMessage] = useState(null);
  const [alertType, setAlertType] = useState("success");
  const [open, setOpen] = useState(false);
  // 노티 관련 부분 컴포넌트로 추출
  const dispatch = useDispatch();
  const combined = useForm();
  const { watch } = combined;

  const { postData } = usePostRequest("/api/auth/register");

  const onSubmit = async (formValues) => {
    const completeEmail = `${formValues.email}@${formValues.domain}`;

    const formData = {
      id: formValues.id,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      email: completeEmail,
    };

    dispatch(setFormData("signup", formData));

    try {
      const response = await postData(formData);
      const successMessage = getResponseMessage(response);
      setAlertMessage(successMessage);
      setAlertType("success");
      setOpen(true);
    } catch (error) {
      const errorMessage = getResponseMessage(null, error);
      setAlertMessage(errorMessage);
      setAlertType("error");
      setOpen(true);
    }
  };

  return (
    <FormProvider {...combined}>
      {/*나중에 스낵바도 추출*/}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert severity={alertType} sx={{ width: "100%" }}>
          {alertMessage}
        </Alert>
      </Snackbar>
      {/*나중에 스낵바도 추출*/}
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
// 각 페이지별로 로직 / UI 분리 해야함 수요일날 회의

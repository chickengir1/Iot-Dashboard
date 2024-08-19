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
  const [notification, setNotification] = useState({
    message: null,
    type: "success",
    open: false,
  });
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
      setNotification({ message: successMessage, type: "success", open: true });
    } catch (error) {
      const errorMessage = getResponseMessage(null, error);
      setNotification({ message: errorMessage, type: "success", open: true });
    }
  };
  const handleClose = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  /*
const [notification, setNotification] = useState({
    message: null,
    type: "success",
    open: false,
  });
  이 부분 포함해서 모두 추출하기
 */

  return (
    <FormProvider {...combined}>
      {/*나중에 한번에 추출*/}
      <Snackbar
        open={notification.open}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        onClose={handleClose}
      >
        <Alert
          severity={notification.type}
          sx={{ width: "100%" }}
          onClose={handleClose}
        >
          {notification.message}
        </Alert>
      </Snackbar>
      {/*나중에 한번에 추출*/}
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

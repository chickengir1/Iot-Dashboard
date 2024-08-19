import React, { useState } from "react";
import {
  Box,
  Typography,
  useMediaQuery,
  Checkbox,
  Button,
} from "@mui/material";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
} from "../styles/index";
import FooterLinks from "../components/footerlinks/FooterLinksContainer";
import { loginFormFields } from "../utils/formFields";
import usePostRequest from "../hooks/usePostRequest";
import { getResponseMessage } from "../error/getResponseMessage";
import Notification from "../components/notification/NotificationContainer";
import { handleFormSubmit } from "../utils/handleSubmit";
import { generateFields } from "../utils/generateFields";

const styles = {
  brandButtonStyle: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 3,
    padding: "10px 16px",
    "&:hover": {
      backgroundColor: "#F8FAFB",
    },
  },
};

// 이것도 나중에 서버에 상태 저장해야함
const SaveLogin = () => (
  <Box sx={{ display: "flex", alignItems: "center", marginTop: "12px" }}>
    <Checkbox sx={{ padding: 0 }} />
    <Typography>로그인 정보 기억하기</Typography>
  </Box>
);

// 나중에 유틸로 따로 뺍시다 지호님
const ButtonComponent = ({ style }) => (
  <Box sx={style}>
    <Button
      startIcon={
        <img
          src={`/icons/google-logo.svg`}
          alt="Google Logo"
          style={{ width: 24, height: 24 }}
        />
      }
      variant="contained"
      fullWidth
      sx={styles.brandButtonStyle}
    >
      Google
    </Button>
    <Button
      startIcon={
        <img
          src={`/icons/apple-logo.svg`}
          alt="Apple Logo"
          style={{ width: 24, height: 24 }}
        />
      }
      variant="contained"
      fullWidth
      sx={styles.brandButtonStyle}
    >
      Apple
    </Button>
  </Box>
);

const MobileLogin = ({ onSubmit, register, errors, watch, formFields }) => (
  <MobileEntryLayout>
    <Box sx={{ border: "solid 1px #ddd", minHeight: "150px" }}>
      <img alt="이미지" />
    </Box>
    {generateFields({ formFields, onSubmit, register, errors, watch })}
    <SaveLogin />
    <Typography align="center" sx={{ marginY: "12px" }}>
      다른 방법으로 로그인
    </Typography>
    <ButtonComponent style={{ display: "flex", gap: "12px" }} />
    <FooterLinks
      text1={"아이디/비밀번호 찾기"}
      link1={"/find-account"}
      text2={"가입하러 가기"}
      link2={"/register"}
    />
  </MobileEntryLayout>
);

const DesktopLogin = ({ onSubmit, register, errors, watch, formFields }) => (
  <DesktopEntryLayout>
    <DesktopEntryMainLayout>
      <Box sx={{ border: "solid 1px #ddd", minHeight: "150px" }}>
        <img alt="이미지" />
      </Box>
      {generateFields({ formFields, onSubmit, register, errors, watch })}
      <SaveLogin />
      <Typography align="center" sx={{ marginY: "12px" }}>
        다른 방법으로 로그인
      </Typography>
      <ButtonComponent style={{ display: "flex", gap: "12px" }} />
      <FooterLinks
        text1={"아이디/비밀번호 찾기"}
        link1={"/find-account"}
        text2={"가입하러 가기"}
        link2={"/register"}
      />
    </DesktopEntryMainLayout>
  </DesktopEntryLayout>
);

const LoginPage = () => {
  const dispatch = useDispatch();
  const combined = useForm();
  const { watch } = combined;
  const isDesktop = useMediaQuery("(min-width:600px)");
  const [notification, setNotification] = useState({
    message: null,
    type: "success",
    open: false,
  });

  const { postData } = usePostRequest("/api/auth/login");

  const onSubmit = async (formValues) => {
    const completeEmail = `${formValues.email}@${formValues.domain}`;
    const formData = {
      id: formValues.id,
      password: formValues.password,
      email: completeEmail,
    };

    console.log(formData);

    await handleFormSubmit({
      formData,
      postData,
      setNotification,
      dispatch,
      actionType: "login",
      successMessageHandler: getResponseMessage,
      errorMessageHandler: (error) => getResponseMessage(null, error),
    });
  };

  return (
    <FormProvider {...combined}>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      {isDesktop ? (
        <DesktopLogin
          formFields={loginFormFields}
          onSubmit={combined.handleSubmit(onSubmit)}
          register={combined.register}
          errors={combined.formState.errors}
          watch={watch}
        />
      ) : (
        <MobileLogin
          formFields={loginFormFields}
          onSubmit={combined.handleSubmit(onSubmit)}
          register={combined.register}
          errors={combined.formState.errors}
          watch={watch}
        />
      )}
    </FormProvider>
  );
};

export default LoginPage;

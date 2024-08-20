import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { FormProvider } from "react-hook-form";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
} from "../../styles/index";
import FooterLinks from "../../components/footerlinks/FooterLinksContainer";
import { generateFields } from "../../utils/generateFields";
import Notification from "../../components/notification/NotificationContainer";
import SaveLogin from "../../components/savelogin/SaveLoginContainer";

// 이 부분 OAuth2 파일 만들어서 서비스 폴더로 추출
const OAuth = ({ style }) => (
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
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: 3,
        padding: "10px 16px",
        "&:hover": {
          backgroundColor: "#F8FAFB",
        },
      }}
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
      sx={{
        backgroundColor: "#fff",
        color: "#000",
        borderRadius: 3,
        padding: "10px 16px",
        "&:hover": {
          backgroundColor: "#F8FAFB",
        },
      }}
    >
      Apple
    </Button>
  </Box>
);

const MobileLogin = ({
  onSubmit,
  register,
  errors,
  watch,
  formFields,
  rememberLogin,
  setRememberLogin,
}) => (
  <MobileEntryLayout>
    <Box sx={{ border: "solid 1px #ddd", minHeight: "150px" }}>
      <img alt="이미지" />
    </Box>
    {generateFields({ formFields, onSubmit, register, errors, watch })}
    <SaveLogin
      rememberLogin={rememberLogin}
      setRememberLogin={setRememberLogin}
    />
    <Typography align="center" sx={{ marginY: "12px" }}>
      다른 방법으로 로그인
    </Typography>
    <OAuth style={{ display: "flex", gap: "12px" }} />
    <FooterLinks
      text1={"아이디/비밀번호 찾기"}
      link1={"/find-account"}
      text2={"가입하러 가기"}
      link2={"/register"}
    />
  </MobileEntryLayout>
);

const DesktopLogin = ({
  onSubmit,
  register,
  errors,
  watch,
  formFields,
  rememberLogin,
  setRememberLogin,
}) => (
  <DesktopEntryLayout>
    <DesktopEntryMainLayout>
      <Box sx={{ border: "solid 1px #ddd", minHeight: "150px" }}>
        <img alt="이미지" />
      </Box>
      {generateFields({ formFields, onSubmit, register, errors, watch })}
      <SaveLogin
        rememberLogin={rememberLogin}
        setRememberLogin={setRememberLogin}
      />
      <Typography align="center" sx={{ marginY: "12px" }}>
        다른 방법으로 로그인
      </Typography>
      <OAuth style={{ display: "flex", gap: "12px" }} />
      <FooterLinks
        text1={"아이디/비밀번호 찾기"}
        link1={"/find-account"}
        text2={"가입하러 가기"}
        link2={"/register"}
      />
    </DesktopEntryMainLayout>
  </DesktopEntryLayout>
);

const LoginUi = ({
  formFields,
  onSubmit,
  combined,
  isDesktop,
  notification,
  setNotification,
  rememberLogin,
  setRememberLogin,
}) => (
  <FormProvider {...combined}>
    <Notification
      notification={notification}
      setNotification={setNotification}
    />
    {isDesktop ? (
      <DesktopLogin
        formFields={formFields}
        onSubmit={onSubmit}
        register={combined.register}
        errors={combined.formState.errors}
        watch={combined.watch}
        rememberLogin={rememberLogin}
        setRememberLogin={setRememberLogin}
      />
    ) : (
      <MobileLogin
        formFields={formFields}
        onSubmit={onSubmit}
        register={combined.register}
        errors={combined.formState.errors}
        watch={combined.watch}
        rememberLogin={rememberLogin}
        setRememberLogin={setRememberLogin}
      />
    )}
  </FormProvider>
);

export default LoginUi;

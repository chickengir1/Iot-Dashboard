import React from "react";
import { Box, Typography, Checkbox } from "@mui/material";
import { FormProvider } from "react-hook-form";
import { layoutConfig } from "../../styles/layoutConfig";
import FooterLinks from "../../components/footerlinks/FooterLinksContainer";
import { generateFields } from "../../utils/generateFields";
import { OAuth } from "../../components/OAuth";
import Notification from "../../components/notification/NotificationContainer";

const RememberMe = ({ checked, onChange }) => (
  <Box sx={{ display: "flex", alignItems: "center", marginTop: "12px" }}>
    <Checkbox sx={{ padding: 0 }} checked={checked} onChange={onChange} />
    <Typography>로그인 정보 기억하기</Typography>
  </Box>
);

const LoginForm = ({
  onSubmit,
  register,
  errors,
  watch,
  fields,
  remember,
  handleRemember,
  Layout,
  MainLayout,
}) => (
  <Layout>
    <MainLayout>
      <Box sx={{ border: "solid 1px #ddd", minHeight: "150px" }}>
        <img alt="이미지" />
      </Box>
      {generateFields({
        formFields: fields,
        onSubmit,
        register,
        errors,
        watch,
      })}
      <RememberMe checked={remember} onChange={handleRemember} />
      <Typography align="center" sx={{ marginY: "12px" }}>
        다른 방법으로 로그인
      </Typography>
      <OAuth style={{ display: "flex", gap: "12px" }} />
      <FooterLinks
        text1="아이디/비밀번호 찾기"
        link1="/find-account"
        text2="가입하러 가기"
        link2="/register"
      />
    </MainLayout>
  </Layout>
);

const LoginUi = ({
  fields,
  onSubmit,
  combined,
  isDesktop,
  notification,
  setNotification,
  remember,
  handleRemember,
}) => {
  const { Layout, MainLayout } = layoutConfig(isDesktop);

  return (
    <FormProvider {...combined}>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <LoginForm
        fields={fields}
        onSubmit={onSubmit}
        register={combined.register}
        errors={combined.formState.errors}
        watch={combined.watch}
        remember={remember}
        handleRemember={handleRemember}
        Layout={Layout}
        MainLayout={MainLayout}
      />
    </FormProvider>
  );
};

export default LoginUi;

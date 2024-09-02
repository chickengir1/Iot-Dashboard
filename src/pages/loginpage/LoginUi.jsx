import { Box, Typography, Checkbox, FormControlLabel } from "@mui/material";
import { FormProvider } from "react-hook-form";
import { layoutConfig } from "@styles/layoutConfig";
import FooterLinks from "@components/footerlinks/FooterLinksContainer";
import { generateFields } from "@utils/generateFields";
import { OAuth } from "@components/OAuth";
import { Image } from "@styles/index";
import Notification from "@components/notification/NotificationContainer";

const RememberMe = ({ checked, onChange }) => (
  <Box sx={{ display: "flex", alignItems: "center", marginTop: "12px" }}>
    <FormControlLabel
      control={<Checkbox checked={checked} onChange={onChange} />}
      label="로그인 정보 기억하기"
      labelPlacement="end"
    />
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
  BackGround,
}) => (
  <>
    <BackGround />
    <Layout>
      <MainLayout>
        <Box>
          <Image
            src={`/logo/smartfarm_banner_200.webp`}
            alt="스마트팜 배너"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
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
  </>
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
  const { Layout, MainLayout, BackGround } = layoutConfig(isDesktop);

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
        BackGround={BackGround}
      />
    </FormProvider>
  );
};

export default LoginUi;

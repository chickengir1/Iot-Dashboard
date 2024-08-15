import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import InputUi from "../components/input/InputUi";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
  BlueRoundedButton,
} from "../styles/index";
import FooterLinksUi from "../components/footerlinks/FooterLinksUi";

const GoogleIcon = () => {
  return (
    <img
      src={`/icons/google-logo.svg`}
      alt="Apple Logo"
      style={{ width: 24, height: 24 }}
    />
  );
};

const AppleIcon = () => {
  return (
    <img
      src={`/icons/apple-logo.svg`}
      alt="Apple Logo"
      style={{ width: 24, height: 24 }}
    />
  );
};

const styles = {
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    gap: 2,
  },
  desktopButtonWrapper: {
    display: "flex",
    alignItems: "center",
    gap: 2,
  },
  brandButtonStyle: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 3,
    padding: "10px 16px",
    "&:hover": {
      backgroundColor: "#F8FAFB",
    },
  },
  logoLayout: { border: "solid 1px #ddd", height: "50px" },
  imageLayout: { border: "solid 1px #ddd", height: "250px" },
};

const SaveLogin = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <CheckCircleOutlineOutlined sx={{ color: "#14AE5C", mr: 1 }} />
      <Typography>로그인 정보 기억하기</Typography>
    </Box>
  );
};

const ButtonComponent = ({ style }) => {
  return (
    <Box sx={style}>
      <Button
        startIcon={<GoogleIcon />}
        variant="contained"
        fullWidth
        sx={styles.brandButtonStyle}
      >
        Google
      </Button>
      <Button
        startIcon={<AppleIcon />}
        variant="contained"
        fullWidth
        sx={styles.brandButtonStyle}
      >
        Apple
      </Button>
    </Box>
  );
};

export const MobileLogin = () => {
  return (
    <MobileEntryLayout>
      <Box sx={styles.imageLayout}>
        <img alt="이미지" />
      </Box>
      <InputUi
        id={"id"}
        label={"아이디"}
        placeholder={"elice1234"}
        error={"error"}
      />
      <InputUi
        id={"password"}
        label={"비밀번호"}
        placeholder={"********"}
        error={"error"}
      />
      <SaveLogin />
      <BlueRoundedButton>Sign In</BlueRoundedButton>
      <Typography align="center">or Sign in with</Typography>
      <ButtonComponent style={styles.buttonWrapper} />
      <FooterLinksUi
        text1={"아이디/비밀번호 찾기"}
        link1={"/find-account"}
        text2={"가입하러 가기"}
        link2={"/register"}
      />
    </MobileEntryLayout>
  );
};

export const DesktopLogin = () => {
  return (
    <DesktopEntryLayout>
      <DesktopEntryMainLayout>
        <Box sx={styles.logoLayout}>
          <img alt="로고" />
        </Box>
        <Box sx={styles.imageLayout}>
          <img alt="이미지" />
        </Box>
        <InputUi
          id={"id"}
          label={"아이디"}
          placeholder={"elice1234"}
          error={"error"}
        />
        <InputUi
          id={"password"}
          label={"비밀번호"}
          placeholder={"********"}
          error={"error"}
        />
        <SaveLogin />
        <BlueRoundedButton>Sign In</BlueRoundedButton>
        <Typography align="center">or Sign in with</Typography>
        <ButtonComponent style={styles.desktopButtonWrapper} />
        <FooterLinksUi
          text1={"아이디/비밀번호 찾기"}
          link1={"/find-account"}
          text2={"가입하러 가기"}
          link2={"/register"}
        />
      </DesktopEntryMainLayout>
    </DesktopEntryLayout>
  );
};

const LoginPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? <DesktopLogin /> : <MobileLogin />;
};

export default LoginPage;

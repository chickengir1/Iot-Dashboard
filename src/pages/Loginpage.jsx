import React from "react";
import { Box, Button, Link, Typography, useMediaQuery } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import InputUi from "../components/input/InputUi";

export const GoogleIcon = () => {
  return (
    <img
      src={`/icons/google-logo.svg`}
      alt="Apple Logo"
      style={{ width: 24, height: 24 }}
    />
  );
};

export const AppleIcon = () => {
  return (
    <img
      src={`/icons/apple-logo.svg`}
      alt="Apple Logo"
      style={{ width: 24, height: 24 }}
    />
  );
};

const styles = {
  mobileLayout: {
    padding: 2,
    margin: "0 auto",
    border: "solid 1px #ddd",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  desktopLayout: {
    width: "600px",
    margin: "0 auto",
    border: "solid 1px #ddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 3,
    padding: 2,
  },
  desktopInnerLayout: {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },
  buttonStyle: {
    backgroundColor: "#64B8FF",
    color: "#fff",
    borderRadius: 3,
    padding: "10px 16px",
    border: "2px solid #fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  brandButtonStyle: {
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 3,
    padding: "10px 16px",
  },
  bottomBoxLayout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

export const MobileLayout = () => {
  return (
    <Box sx={styles.mobileLayout}>
      <Box sx={{ border: "solid 1px #ddd", height: "250px" }}>
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
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CheckCircleOutlineOutlined sx={{ color: "#14AE5C", mr: 1 }} />
        <Typography>로그인 정보 기억하기</Typography>
      </Box>

      <Button variant="contained" sx={styles.buttonStyle}>
        Sign In
      </Button>
      <Typography align="center">or Sign in with</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          gap: 2,
        }}
      >
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

      <Box sx={styles.bottomBoxLayout}>
        <Link>아이디/비밀번호 찾기</Link>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CheckCircleOutlineOutlined sx={{ color: "#14AE5C", mr: 1 }} />
          <Typography>가입하러 가기</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export const DesktopLayout = () => {
  return (
    <Box sx={styles.desktopLayout}>
      <Box sx={styles.desktopInnerLayout}>
        <Box sx={{ border: "solid 1px #ddd", height: "50px" }}>
          <img alt="로고" />
        </Box>
        <Box sx={{ border: "solid 1px #ddd", height: "250px" }}>
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
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CheckCircleOutlineOutlined sx={{ color: "#14AE5C", mr: 1 }} />
          <Typography>로그인 정보 기억하기</Typography>
        </Box>

        <Button variant="contained" sx={styles.buttonStyle}>
          Sign In
        </Button>
        <Typography align="center">or Sign in with</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
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

        <Box sx={styles.bottomBoxLayout}>
          <Link>아이디/비밀번호 찾기</Link>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircleOutlineOutlined sx={{ color: "#14AE5C", mr: 1 }} />
            <Typography>가입하러 가기</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const LoginPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? <DesktopLayout /> : <MobileLayout />;
};

export default LoginPage;

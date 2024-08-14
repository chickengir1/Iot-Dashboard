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

export const MobileLayout = () => {
  const mobileLayout = {
    padding: 2,
    margin: "0 auto",
    border: "solid 1px #ddd",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  };

  return (
    <Box sx={mobileLayout}>
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

      <Button variant="contained" fullWidth>
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
          sx={{ backgroundColor: "#fff", color: "#000" }}
        >
          Google
        </Button>
        <Button
          startIcon={<AppleIcon />}
          variant="contained"
          fullWidth
          sx={{ backgroundColor: "#fff", color: "#000" }}
        >
          Apple
        </Button>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
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
  const desktopLayout = {
    width: "600px",
    margin: "0 auto",
    border: "solid 1px #ddd",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 3,
    padding: 2,
  };

  const desktopInnerLayout = {
    width: "500px",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  };

  return (
    <Box sx={desktopLayout}>
      <Box sx={desktopInnerLayout}>
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

        <Button variant="contained" fullWidth>
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
            sx={{ backgroundColor: "#fff", color: "#000" }}
          >
            Google
          </Button>
          <Button
            startIcon={<AppleIcon />}
            variant="contained"
            fullWidth
            sx={{ backgroundColor: "#fff", color: "#000" }}
          >
            Apple
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
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

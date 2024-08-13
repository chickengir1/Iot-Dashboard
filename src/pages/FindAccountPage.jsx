import React from "react";
import { Box, Button, Link, Typography, useMediaQuery } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";

export const MobileLayout = () => {
  const mobileLayout = {
    padding: 2,
    margin: "0 auto",
    border: "solid 1px #ddd",
    display: "flex",
    flexDirection: "column",
    gap: 2,
  };

  const buttonStyle = {
    borderColor: "#000",
    color: "#000",
    height: "150px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  };

  return (
    <Box sx={mobileLayout}>
      <Box sx={{ border: "solid 1px #ddd", height: "250px" }}>
        <img alt="이미지" />
      </Box>
      <Button variant="outlined" sx={buttonStyle}>
        아이디 찾기
      </Button>
      <Button variant="outlined" sx={buttonStyle}>
        비밀번호 찾기
      </Button>
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

  const buttonStyle = {
    borderColor: "#000",
    color: "#000",
    height: "150px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
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
        <Button variant="outlined" sx={buttonStyle}>
          아이디 찾기
        </Button>
        <Button variant="outlined" sx={buttonStyle}>
          비밀번호 찾기
        </Button>
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

const FindAccountPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? <DesktopLayout /> : <MobileLayout />;
};

export default FindAccountPage;

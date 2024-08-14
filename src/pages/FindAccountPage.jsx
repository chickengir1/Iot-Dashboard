import React from "react";
import { Box, Button, Link, Typography, useMediaQuery } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";

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
  findButtonStyle: {
    border: "1px solid #000",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 3,
    height: "150px",
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
      <Button variant="contained" sx={styles.findButtonStyle}>
        아이디 찾기
      </Button>
      <Button variant="contained" sx={styles.findButtonStyle}>
        비밀번호 찾기
      </Button>
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
        <Button variant="contained" sx={styles.findButtonStyle}>
          아이디 찾기
        </Button>
        <Button variant="contained" sx={styles.findButtonStyle}>
          비밀번호 찾기
        </Button>
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

const FindAccountPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? <DesktopLayout /> : <MobileLayout />;
};

export default FindAccountPage;

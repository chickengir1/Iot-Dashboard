import React from "react";
import { Box, Button, Link, Typography, useMediaQuery } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import {
  MobileLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
} from "../styles/index";

const styles = {
  findButtonStyle: {
    border: "1px solid #000",
    backgroundColor: "#fff",
    color: "#000",
    borderRadius: 3,
    height: "120px",
    "&:hover": {
      backgroundColor: "#F8FAFB",
    },
  },
  // 레이아웃으로 빼내기보단 컴포넌트 분리가 좋을 것 같음.
  footerLayout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoLayout: { border: "solid 1px #ddd", height: "50px" },
  imageLayout: { border: "solid 1px #ddd", height: "250px" },
};

const LookupButtonComponent = () => {
  return (
    <>
      <Button variant="contained" sx={styles.findButtonStyle}>
        아이디 찾기
      </Button>
      <Button variant="contained" sx={styles.findButtonStyle}>
        비밀번호 찾기
      </Button>
    </>
  );
};

const FooterLinks = () => {
  return (
    <Box sx={styles.footerLayout}>
      <Link>아이디/비밀번호 찾기</Link>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CheckCircleOutlineOutlined sx={{ color: "#14AE5C", mr: 1 }} />
        <Typography>가입하러 가기</Typography>
      </Box>
    </Box>
  );
};

export const MobileLookup = () => {
  return (
    <MobileLayout>
      <Box sx={styles.imageLayout}>
        <img alt="이미지" />
      </Box>
      <LookupButtonComponent />
      <FooterLinks />
    </MobileLayout>
  );
};

export const DesktopLookup = () => {
  return (
    <DesktopEntryLayout>
      <DesktopEntryMainLayout>
        <Box sx={styles.logoLayout}>
          <img alt="로고" />
        </Box>
        <Box sx={styles.imageLayout}>
          <img alt="이미지" />
        </Box>
        <LookupButtonComponent />
        <FooterLinks />
      </DesktopEntryMainLayout>
    </DesktopEntryLayout>
  );
};

const FindAccountPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? <DesktopLookup /> : <MobileLookup />;
};

export default FindAccountPage;

import React from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import InputUi from "../components/input/InputUi";
import {
  MobileLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
  BlueRoundedButton,
} from "../styles/index";

const styles = {
  // 레이아웃으로 빼내기보단 컴포넌트 분리가 좋을 것 같음. 하단 3개
  footerLayout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
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

export const MobileFindId = () => {
  return (
    <MobileLayout>
      <Box sx={styles.imageLayout}>
        <img alt="이미지" />
      </Box>
      <InputUi
        id={"username"}
        label={"이름"}
        placeholder={"홍길동"}
        error={"error"}
      />
      <InputUi
        id={"phoneNumber"}
        label={"전화번호"}
        placeholder={"01012341234"}
        error={"error"}
      />
      <SaveLogin />
      <BlueRoundedButton>아이디 찾기</BlueRoundedButton>
      <FooterLinks />
    </MobileLayout>
  );
};

export const DesktopFindId = () => {
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
          id={"username"}
          label={"이름"}
          placeholder={"홍길동"}
          error={"error"}
        />
        <InputUi
          id={"phoneNumber"}
          label={"전화번호"}
          placeholder={"01012341234"}
          error={"error"}
        />
        <SaveLogin />
        <BlueRoundedButton>아이디 찾기</BlueRoundedButton>
        <FooterLinks />
      </DesktopEntryMainLayout>
    </DesktopEntryLayout>
  );
};

const FindPWPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? <DesktopFindId /> : <MobileFindId />;
};

export default FindPWPage;

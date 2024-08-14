import React from "react";
import { Box, Link, Typography, useMediaQuery } from "@mui/material";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import InputUi from "../components/input/InputUi";
import SelectUi from "../components/selector/SelectUi";
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

const FooterLinks = () => {
  return (
    <Box sx={styles.footerLayout}>
      <Link>가입 안내 문구</Link>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <CheckCircleOutlineOutlined sx={{ color: "#14AE5C", mr: 1 }} />
        <Typography>로그인 하러 가기</Typography>
      </Box>
    </Box>
  );
};

export const MobileRegister = () => {
  return (
    <MobileLayout>
      <Box sx={styles.imageLayout}>
        <img alt="이미지" />
      </Box>

      <InputUi
        id={"id"}
        label={"아이디"}
        placeholder={"elice1234"}
        error={"error"}
      />
      <SelectUi />
      <InputUi
        id={"password"}
        label={"비밀번호"}
        placeholder={"********"}
        error={"error"}
      />
      <InputUi
        id={"password"}
        label={"비밀번호 확인"}
        placeholder={"********"}
        error={"error"}
      />
      <InputUi
        id={"phoneNumber"}
        label={"전화번호"}
        placeholder={"01012341234"}
        error={"error"}
      />
      <BlueRoundedButton>Sign Up</BlueRoundedButton>
      <FooterLinks />
    </MobileLayout>
  );
};

export const DesktopRegister = () => {
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
        <SelectUi />
        <InputUi
          id={"password"}
          label={"비밀번호"}
          placeholder={"********"}
          error={"error"}
        />
        <InputUi
          id={"password"}
          label={"비밀번호 확인"}
          placeholder={"********"}
          error={"error"}
        />
        <InputUi
          id={"phoneNumber"}
          label={"전화번호"}
          placeholder={"01012341234"}
          error={"error"}
        />
        <BlueRoundedButton>Sign Up</BlueRoundedButton>
        <FooterLinks />
      </DesktopEntryMainLayout>
    </DesktopEntryLayout>
  );
};

const SignUpPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? <DesktopRegister /> : <MobileRegister />;
};

export default SignUpPage;

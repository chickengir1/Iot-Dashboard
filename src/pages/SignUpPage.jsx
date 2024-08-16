import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Input from "../components/input/InputContainer";
import Select from "../components/selector/SelectContainer";
import FooterLinks from "../components/footerlinks/FooterLinksContainer";

import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
  BlueRoundedButton,
} from "../styles/index";

const styles = {
  logoLayout: { border: "solid 1px #ddd", height: "50px" },
  imageLayout: { border: "solid 1px #ddd", height: "250px" },
};

export const MobileRegister = () => {
  return (
    <MobileEntryLayout>
      <Box sx={styles.imageLayout}>
        <img alt="이미지" />
      </Box>
      <Input
        id={"id"}
        label={"아이디"}
        placeholder={"elice1234"}
        error={"error"}
      />
      <Select
        id={"id"}
        label={"아이디"}
        placeholder={"elice1234"}
        error={"error"}
        selectValue={10}
      />
      <Input
        id={"password"}
        label={"비밀번호"}
        placeholder={"********"}
        error={"error"}
      />
      <Input
        id={"password"}
        label={"비밀번호 확인"}
        placeholder={"********"}
        error={"error"}
      />
      <BlueRoundedButton>Sign Up</BlueRoundedButton>
      <FooterLinks link1={"/"} text2={"로그인 하러 가기"} link2={"/"} />
    </MobileEntryLayout>
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
        <Input
          id={"id"}
          label={"아이디"}
          placeholder={"elice1234"}
          error={"error"}
        />
        <Select
          id={"id"}
          label={"아이디"}
          placeholder={"elice1234"}
          error={"error"}
          selectValue={10}
        />
        <Input
          id={"password"}
          label={"비밀번호"}
          placeholder={"********"}
          error={"error"}
        />
        <Input
          id={"password"}
          label={"비밀번호 확인"}
          placeholder={"********"}
          error={"error"}
        />
        <BlueRoundedButton>Sign Up</BlueRoundedButton>
        <FooterLinks link1={"/"} text2={"로그인 하러 가기"} link2={"/"} />
      </DesktopEntryMainLayout>
    </DesktopEntryLayout>
  );
};

const SignUpPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? <DesktopRegister /> : <MobileRegister />;
};

export default SignUpPage;

import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Input from "../components/input/InputContainer";
import Select from "../components/selector/SelectContainer";
import FooterLinksUi from "../components/footerlinks/FooterLinksUi";
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

export const MobileFindPassword = () => {
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
      <BlueRoundedButton>비밀번호 찾기</BlueRoundedButton>
      <FooterLinksUi
        text1={"아이디/비밀번호 찾기"}
        link1={"/find-account"}
        text2={"가입하러 가기"}
        link2={"/register"}
      />
    </MobileEntryLayout>
  );
};

export const DesktopFindPassword = () => {
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
        <BlueRoundedButton>비밀번호 찾기</BlueRoundedButton>
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

const FindPasswordPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? <DesktopFindPassword /> : <MobileFindPassword />;
};

export default FindPasswordPage;

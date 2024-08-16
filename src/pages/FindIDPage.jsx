import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import Select from "../components/selector/SelectContainer";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
  BlueRoundedButton,
} from "../styles/index";
import FooterLinks from "../components/footerlinks/FooterLinksContainer";

const styles = {
  imageLayout: { border: "solid 1px #ddd", height: "250px" },
};

export const MobileFindId = () => {
  return (
    <MobileEntryLayout>
      <Box sx={styles.imageLayout}>
        <img alt="이미지" />
      </Box>
      <Select
        id={"id"}
        label={"아이디"}
        placeholder={"elice1234"}
        error={"error"}
        selectValue={10}
      />
      <BlueRoundedButton>아이디 찾기</BlueRoundedButton>
      <FooterLinks
        text1={"아이디/비밀번호 찾기"}
        link1={"/find-account"}
        text2={"가입하러 가기"}
        link2={"/register"}
      />
    </MobileEntryLayout>
  );
};

export const DesktopFindId = () => {
  return (
    <DesktopEntryLayout>
      <DesktopEntryMainLayout>
        <Box sx={styles.imageLayout}>
          <img alt="이미지" />
        </Box>
        <Select
          id={"id"}
          label={"아이디"}
          placeholder={"elice1234"}
          error={"error"}
          selectValue={10}
        />
        <BlueRoundedButton>아이디 찾기</BlueRoundedButton>
        <FooterLinks
          text1={"아이디/비밀번호 찾기"}
          link1={"/find-account"}
          text2={"가입하러 가기"}
          link2={"/register"}
        />
      </DesktopEntryMainLayout>
    </DesktopEntryLayout>
  );
};

const FindIDPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? <DesktopFindId /> : <MobileFindId />;
};

export default FindIDPage;

import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import SelectUi from "../components/selector/SelectUi";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
  BlueRoundedButton,
} from "../styles/index";
import FooterLinksUi from "../components/footerlinks/FooterLinksUi";

const styles = {
  logoLayout: { border: "solid 1px #ddd", height: "50px" },
  imageLayout: { border: "solid 1px #ddd", height: "250px" },
};

export const MobileFindId = () => {
  return (
    <MobileEntryLayout>
      <Box sx={styles.imageLayout}>
        <img alt="이미지" />
      </Box>
      <SelectUi />
      <BlueRoundedButton>아이디 찾기</BlueRoundedButton>
      <FooterLinksUi
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
        <Box sx={styles.logoLayout}>
          <img alt="로고" />
        </Box>
        <Box sx={styles.imageLayout}>
          <img alt="이미지" />
        </Box>
        <SelectUi />
        <BlueRoundedButton>아이디 찾기</BlueRoundedButton>
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

const FindIDPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? <DesktopFindId /> : <MobileFindId />;
};

export default FindIDPage;

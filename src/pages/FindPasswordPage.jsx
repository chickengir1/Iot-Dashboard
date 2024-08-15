import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import InputUi from "../components/input/InputUi";
import SelectUi from "../components/selector/SelectUi";
import FooterLinksUi from "../components/footerlinks/FooterLinksUi";
import {
  MobileLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
  BlueRoundedButton,
} from "../styles/index";

const styles = {
  // 레이아웃으로 빼내기보단 컴포넌트 분리가 좋을 것 같음. 하단 3개
  logoLayout: { border: "solid 1px #ddd", height: "50px" },
  imageLayout: { border: "solid 1px #ddd", height: "250px" },
};

export const MobileFindPassword = () => {
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
      <BlueRoundedButton>비밀번호 찾기</BlueRoundedButton>
      <FooterLinksUi
        text1={"아이디/비밀번호 찾기"}
        href1={"/find-account"}
        text2={"가입하러 가기"}
      />
    </MobileLayout>
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

        <InputUi
          id={"id"}
          label={"아이디"}
          placeholder={"elice1234"}
          error={"error"}
        />
        <SelectUi />
        <BlueRoundedButton>비밀번호 찾기</BlueRoundedButton>
        <FooterLinksUi
          text1={"아이디/비밀번호 찾기"}
          href1={"/find-account"}
          text2={"가입하러 가기"}
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

import React from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
} from "../styles/index";
import FooterLinksUi from "../components/footerlinks/FooterLinksUi";

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

export const MobileLookup = () => {
  return (
    <MobileEntryLayout>
      <Box sx={styles.imageLayout}>
        <img alt="이미지" />
      </Box>
      <LookupButtonComponent />
      <FooterLinksUi
        text1={"아이디/비밀번호 찾기"}
        link1={"/find-account"}
        text2={"가입하러 가기"}
        link2={"/register"}
      />
    </MobileEntryLayout>
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

const FindAccountPage = () => {
  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? <DesktopLookup /> : <MobileLookup />;
};

export default FindAccountPage;

import React from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
} from "../styles/index";
import FooterLinks from "../components/footerlinks/FooterLinksContainer";
import { useNavigate } from "react-router-dom";

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

  imageLayout: { border: "solid 1px #ddd", height: "250px" },
};

const LookupButtonComponent = ({ handleNavigation }) => {
  return (
    <>
      <Button
        variant="contained"
        sx={styles.findButtonStyle}
        onClick={() => handleNavigation("ID")}
      >
        아이디 찾기
      </Button>
      <Button
        variant="contained"
        sx={styles.findButtonStyle}
        onClick={() => handleNavigation("PW")}
      >
        비밀번호 찾기
      </Button>
    </>
  );
};

export const MobileLookup = ({ handleNavigation }) => {
  return (
    <MobileEntryLayout>
      <Box sx={styles.imageLayout}>
        <img alt="이미지" />
      </Box>
      <LookupButtonComponent handleNavigation={handleNavigation} />
      <FooterLinks
        text1={"아이디/비밀번호 찾기"}
        link1={"/find-account"}
        text2={"가입하러 가기"}
        link2={"/register"}
      />
    </MobileEntryLayout>
  );
};

export const DesktopLookup = ({ handleNavigation }) => {
  return (
    <DesktopEntryLayout>
      <DesktopEntryMainLayout>
        <Box sx={styles.imageLayout}>
          <img alt="이미지" />
        </Box>
        <LookupButtonComponent handleNavigation={handleNavigation} />
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

const FindAccountPage = () => {
  const navigate = useNavigate();

  const handleNavigation = (apiType) => {
    if (apiType === "ID") {
      navigate("/find-userid");
    } else if (apiType === "PW") {
      navigate("/forgot-password");
    }
  };

  const isDesktop = useMediaQuery("(min-width:600px)");

  return isDesktop ? (
    <DesktopLookup handleNavigation={handleNavigation} />
  ) : (
    <MobileLookup handleNavigation={handleNavigation} />
  );
};

export default FindAccountPage;

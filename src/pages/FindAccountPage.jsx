import React from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import {
  MobileEntryLayout,
  DesktopEntryLayout,
  DesktopEntryMainLayout,
  Image,
} from "@styles/index";
import FooterLinks from "@components/footerlinks/FooterLinksContainer";
import { useNavigate } from "react-router-dom";

const styles = {
  buttonContainer: {
    display: "flex",
    gap: 4,
    margin: "0 auto",
    width: "100%",
  },
  findButtonStyle: {
    backgroundColor: "#fff",
    color: "#000",
    minHeight: "50px",
    borderRadius: 3,
    flexGrow: 1,
    "&:hover": {
      backgroundColor: "#F8FAFB",
    },
  },
};

const LookupButtonComponent = ({ handleNavigation }) => {
  return (
    <Box sx={styles.buttonContainer}>
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
    </Box>
  );
};

export const MobileLookup = ({ handleNavigation }) => {
  return (
    <MobileEntryLayout>
      <Box>
        <Image src={`logo/smartfarm_banner.png`} alt="스마트팜 배너" />
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
        <Box>
          <Image src={`logo/smartfarm_banner.png`} alt="스마트팜 배너" />
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

import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import UserCard from "../components/usercard/UserCardContainer";

const MobileDeviceAdd = () => {
  const mobileLayout = {
    padding: 2,
    margin: "0 auto",
    maxWidth: "412px",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "80px",
    gap: 1,
  };
  return (
    <Box sx={mobileLayout}>
      <UserCard />
    </Box>
  );
};

const DesktopDeviceAdd = () => {
  return (
    <Box>
      <h1>데스크탑 디바이스 추가</h1>
    </Box>
  );
};

const DeviceAddPage = () => {
  const isDesktop = useMediaQuery("(min-width:1280px)");
  return isDesktop ? <DesktopDeviceAdd /> : <MobileDeviceAdd />;
};

export default DeviceAddPage;

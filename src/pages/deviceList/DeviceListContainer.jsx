import React from "react";
import { useMediaQuery, Typography, Grid, Box } from "@mui/material";
import {
  DesktopLayout,
  BlueRoundedButton,
  ServeContent,
  MobileLayout,
  MainLayout,
} from "../../styles/index";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import UserCard from "../../components/usercard/UserCardContainer";
import Sidebar from "../../components/sidebar/SidebarContainer";
import ListItem from "../../components/listitem/ListItemContainer";
import useFetchData from "../../hooks/useFetchData";
import { getEmail } from "../../utils/commonUtils";
import DeviceUi from "./DeviceListUi";

const styles = {
  addButtonStyle: {
    minHeight: "75px",
  },
};

export const DeviceItem = ({ name, description }) => (
  <ListItem
    title={name}
    description={description}
    icon={<SettingsIcon />}
    avatar={true}
  />
);

export const MobileDeviceList = ({ devices = [], userName }) => (
  <MobileLayout>
    <UserCard />
    <Typography textAlign="center" sx={{ mb: 2 }}>
      {userName}님의 디바이스 목록
    </Typography>
    {devices.map((device) => (
      <DeviceItem
        key={device.name}
        name={device.name}
        description={device.description}
      />
    ))}
    <BlueRoundedButton fullWidth endIcon={<AddCircleOutlineIcon />}>
      디바이스 추가하기
    </BlueRoundedButton>
    <Sidebar />
  </MobileLayout>
);

export const DesktopDeviceList = ({ devices = [], userName }) => (
  <DesktopLayout>
    <Sidebar />
    <MainLayout>
      <UserCard />
      <Box sx={{ flex: "1 1 100px", aspectRatio: "1/1" }}>
        <Typography textAlign="center" sx={{ mb: 2 }}>
          {userName}님의 디바이스 목록
        </Typography>
        <Grid container spacing={3}>
          {devices.map((device) => (
            <Grid item key={device.name} xs={12} sm={6} md={6} lg={6}>
              <DeviceItem name={device.name} description={device.description} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <BlueRoundedButton
        sx={styles.addButtonStyle}
        fullWidth
        endIcon={<AddCircleOutlineIcon />}
      >
        디바이스 추가하기
      </BlueRoundedButton>
    </MainLayout>
    <ServeContent />
  </DesktopLayout>
);

const DeviceList = () => {
  const isDesktop = useMediaQuery("(min-width:1280px)");

  const userEmail = "user@example.com";
  // 나중에 써야됨
  // const { data: deviceData } = useFetchData(
  //   `/api/devices?email=${userEmail}`,
  //   userEmail
  // );
  const { data: deviceData } = useFetchData("./db.json");

  const devices = deviceData?.devices || [];
  const userData = deviceData?.userEmail || userEmail;

  console.log(JSON.stringify(devices));
  const userName = getEmail(userData);

  return (
    <DeviceUi isDesktop={isDesktop} devices={devices} userName={userName} />
  );
};

export default DeviceList;

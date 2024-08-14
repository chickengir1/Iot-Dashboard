import React from "react";
import {
  useMediaQuery,
  Box,
  Typography,
  IconButton,
  Avatar,
  Grid,
} from "@mui/material";
import {
  DesktopLayout,
  BlueRoundedButton,
  ServeContent,
  MobileLayout,
  MainLayout,
} from "../styles/index";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import UserCard from "../components/usercard/UserCardContainer";
import Sidebar from "../components/sidebar/sidebarcontainer";

const mainTitle = "디바이스 목록";

const devices = [
  { name: "빅토리 농장", description: "Victory Farm" },
  { name: "ABC 농장", description: "ABC Farm" },
  { name: "ff 농장", description: "ff Farm" },
  { name: "Pinking 농장", description: "Pinking Farm" },
  { name: "Victory Farm", description: "Victory Farm" },
  { name: "ABC Farm", description: "ABC Farm" },
  { name: "ff Farm", description: "ff Farm" },
];

const styles = {
  deviceStyled: {
    display: "flex",
    alignItems: "center",
    padding: 2,
    borderRadius: 2,
    boxShadow: 1,
    bgcolor: "background.paper",
    gap: 2,
  },
  avatarStyle: {
    width: 56,
    height: 56,
    bgcolor: "grey.300",
  },
  addButtonStyle: {
    mt: 3,
    minHeight: "75px",
  },
};

const DeviceItem = ({ name, description }) => (
  <Box sx={styles.deviceStyled}>
    <Avatar variant="rounded" sx={styles.avatarStyle} />
    <Box flexGrow={1}>
      <Typography variant="body1" fontWeight="bold">
        {name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </Box>
    <IconButton edge="end" aria-label="settings">
      <SettingsIcon />
    </IconButton>
  </Box>
);

const MobileDeviceList = () => (
  <MobileLayout>
    <UserCard />
    <Typography textAlign="center">{mainTitle}</Typography>
    {devices.map((device, index) => (
      <DeviceItem
        key={index}
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

const DesktopDeviceList = () => (
  <DesktopLayout>
    <Sidebar />
    <MainLayout>
      <UserCard />
      <Typography textAlign="center" variant="h6" gutterBottom>
        {mainTitle}
      </Typography>
      <Grid container spacing={3}>
        {devices.map((device, index) => (
          <Grid item key={index} xs={12} sm={6} md={6} lg={6}>
            <DeviceItem name={device.name} description={device.description} />
          </Grid>
        ))}
      </Grid>
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
  return isDesktop ? <DesktopDeviceList /> : <MobileDeviceList />;
};

export default DeviceList;

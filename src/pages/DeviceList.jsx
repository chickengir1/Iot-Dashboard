import React from "react";
import {
  useMediaQuery,
  Box,
  Typography,
  IconButton,
  Avatar,
  Button,
  Grid,
} from "@mui/material";
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
  mobileLayout: {
    padding: 2,
    margin: "0 auto",
    maxWidth: "412px",
    display: "flex",
    flexDirection: "column",
    paddingBottom: "80px",
    gap: 1,
  },
  deviceStyled: {
    display: "flex",
    alignItems: "center",
    padding: 2,
    borderRadius: 2,
    boxShadow: 1,
    bgcolor: "background.paper",
  },
  buttonStyle: {
    backgroundColor: "#64B8FF",
    color: "#fff",
    borderRadius: 3,
    padding: "10px 16px",
    border: "2px solid #fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const DeviceItem = ({ name, description }) => (
  <Box sx={styles.deviceStyled}>
    <Avatar
      variant="rounded"
      sx={{ width: 56, height: 56, bgcolor: "grey.300", marginRight: 2 }}
    />
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
  <Box sx={styles.mobileLayout}>
    <UserCard />
    <Typography textAlign="center">{mainTitle}</Typography>
    {devices.map((device, index) => (
      <DeviceItem
        key={index}
        name={device.name}
        description={device.description}
      />
    ))}
    <Button
      variant="contained"
      fullWidth
      endIcon={<AddCircleOutlineIcon />}
      sx={styles.buttonStyle}
    >
      디바이스 추가하기
    </Button>
    <Sidebar />
  </Box>
);

const DesktopDeviceList = () => {
  const desktopLayout = {
    padding: 2,
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    height: "96vh",
  };

  const mainContentStyle = {
    flexGrow: 1,
    padding: 2,
    display: "flex",
    marginLeft: 2,
    flexDirection: "column",
    border: "1px solid #ddd",
    borderRadius: 2,
  };
  const serveContentStyle = {
    minWidth: "220px",
    maxWidth: "220px",
    marginLeft: 2,
    border: "1px solid #ddd",
    padding: 2,
    borderRadius: 2,
  };

  const gridContainerStyle = {
    padding: 2,
  };

  return (
    <Box sx={desktopLayout}>
      <Sidebar />
      <Box sx={mainContentStyle}>
        <UserCard />
        <Typography textAlign="center" variant="h6" gutterBottom>
          {mainTitle}
        </Typography>
        <Grid container spacing={3} sx={gridContainerStyle}>
          {devices.map((device, index) => (
            <Grid item key={index} xs={12} sm={6} md={6} lg={6}>
              <DeviceItem name={device.name} description={device.description} />
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={6} lg={4}>
            <Button
              variant="contained"
              fullWidth
              endIcon={<AddCircleOutlineIcon />}
              sx={styles.buttonStyle}
            >
              디바이스 추가하기
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Box sx={serveContentStyle}>{/*이미지 아무거나*/}</Box>
    </Box>
  );
};

const DeviceList = () => {
  const isDesktop = useMediaQuery("(min-width:1280px)");
  return isDesktop ? <DesktopDeviceList /> : <MobileDeviceList />;
};

export default DeviceList;

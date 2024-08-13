import React from "react";
import {
  Box,
  useMediaQuery,
  Typography,
  IconButton,
  Badge,
  Avatar,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import UserCard from "../components/usercard/UserCardContainer";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import WifiIcon from "@mui/icons-material/Wifi";
import Sidebar from "../components/sidebar/sidebarcontainer";
import InputUi from "../components/input/InputUi";

const styles = {
  layout: {
    padding: 2,
    margin: "0 auto",
    maxWidth: "412px",
    display: "flex",
    flexDirection: "column",
    gap: 2,
    paddingBottom: "80px",
  },
  addDeviceContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 2,
    boxShadow: 2,
    marginBottom: 2,
  },
  badgeContainer: {
    display: "flex",
    alignItems: "center",
    padding: 2,
    borderRadius: 2,
    boxShadow: 2,
    gap: 3,
  },
  circleIcon: {
    color: "#64B8FF",
    backgroundColor: "#fff",
    borderRadius: "50%",
    padding: 1,
  },
  avatar: {
    width: 60,
    height: 60,
  },
  cardStyle: {
    marginTop: 2,
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
  desktopLayout: {
    display: "flex",
    flexDirection: "row",
    padding: 4,
    height: "100vh",
  },
  mainContent: {
    flexGrow: 1,
    padding: 4,
    marginLeft: 2,
    display: "flex",
    flexDirection: "column",
    gap: 2,
    border: "1px solid #ddd",
    borderRadius: 2,
  },
  serveContentStyle: {
    minWidth: "220px",
    maxWidth: "220px",
    marginLeft: 2,
    border: "1px solid #ddd",
    padding: 2,
    borderRadius: 2,
  },
};

const AddDeviceSection = () => (
  <>
    <Box sx={styles.addDeviceContainer}>
      <WifiIcon style={{ fontSize: 50, ...styles.circleIcon }} />
      <Typography variant="body1">
        장치 찾기
        <IconButton color="primary">
          <AddCircleOutlineIcon style={styles.circleIcon} />
        </IconButton>
      </Typography>
    </Box>
    <Box sx={styles.badgeContainer}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        badgeContent={
          <IconButton color="primary">
            <AddCircleOutlineIcon style={styles.circleIcon} />
          </IconButton>
        }
      >
        <Avatar sx={styles.avatar} src="" alt="Device Image" />
      </Badge>
      <Typography variant="body1">장치 이미지 등록하기</Typography>
    </Box>
    <Button
      variant="contained"
      fullWidth
      endIcon={<AddCircleOutlineIcon />}
      sx={styles.buttonStyle}
    >
      디바이스 추가하기
    </Button>
  </>
);

const MobileDeviceAdd = () => (
  <Box sx={styles.layout}>
    <UserCard />
    <Typography variant="body1" textAlign="center">
      디바이스 등록
    </Typography>
    <AddDeviceSection />
    <InputUi label="장치 이름 등록하기" placeholder="name" />
    <InputUi label="장치 설명 등록하기" placeholder="description" />
    <Card sx={styles.cardStyle}>
      <CardContent>
        <Typography variant="body2">장치등록 주의 사항</Typography>
      </CardContent>
    </Card>
    <Sidebar />
  </Box>
);

const DesktopDeviceAdd = () => (
  <Box sx={styles.desktopLayout}>
    <Sidebar />
    <Box sx={styles.mainContent}>
      <UserCard />
      <AddDeviceSection />
      <InputUi label="장치 이름 등록하기" placeholder="name" />
      <InputUi label="장치 설명 등록하기" placeholder="description" />
      <Card sx={styles.cardStyle}>
        <CardContent>
          <Typography variant="body2">장치등록 주의 사항</Typography>
        </CardContent>
      </Card>
    </Box>
    <Box sx={styles.serveContentStyle}>{/*이미지 아무거나*/}</Box>
  </Box>
);

const DeviceAddPage = () => {
  const isDesktop = useMediaQuery("(min-width:1280px)");
  return isDesktop ? <DesktopDeviceAdd /> : <MobileDeviceAdd />;
};

export default DeviceAddPage;

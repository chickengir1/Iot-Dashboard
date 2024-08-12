import React from "react";
import UserCard from "../components/usercard/UserCardContainer";
import {
  Box,
  Typography,
  Button,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import DeleteIcon from "@mui/icons-material/Delete";
import { ArrowForward } from "@mui/icons-material";
import Sidebar from "../components/sidebar/sidebarcontainer";

const listItems = [
  { text: "프로필 정보 수정", icon: <EditIcon /> },
  { text: "더 많은 제품 보기", icon: <VisibilityIcon /> },
  { text: "알람 설정", icon: <NotificationsIcon /> },
];

const buttonStyle = {
  backgroundColor: "#FF8A8A",
  border: "2px solid #fff",
  borderRadius: 2,
  "&:hover": {
    backgroundColor: "#FF6F6F",
  },
};

const listComponents = () =>
  listItems.map((item, index) => (
    <Card sx={{ mb: 4 }} key={index}>
      <ListItem button>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
        <ArrowForward />
      </ListItem>
    </Card>
  ));

const buttonComponents = () => (
  <Box sx={{ display: "flex", gap: 2 }}>
    <Button
      variant="contained"
      fullWidth
      startIcon={<LogoutIcon />}
      sx={buttonStyle}
    >
      로그아웃 하기
    </Button>
    <Button
      variant="contained"
      fullWidth
      startIcon={<DeleteIcon />}
      sx={buttonStyle}
    >
      회원 탈퇴하기
    </Button>
  </Box>
);

const MobileProfile = () => {
  const mobileLayout = {
    padding: 2,
    margin: "0 auto",
    maxWidth: "412px",
    display: "flex",
    flexDirection: "column",
    gap: 1,
  };

  return (
    <Box sx={mobileLayout}>
      <Typography variant="h6" sx={{ mb: 1 }}>
        회원 정보
      </Typography>
      <UserCard />
      <Box
        sx={{
          border: "1px solid #ddd",
          borderRadius: 1,
          height: "100px",
        }}
      >
        {/*팀 이미지*/}
      </Box>
      <Typography variant="h6" sx={{ mb: 1 }}>
        계정 설정
      </Typography>
      <List>{listComponents()}</List>
      {buttonComponents()}
      <Sidebar />
    </Box>
  );
};

const DesktopProfile = () => {
  /* 비슷한 레이아웃 한번 더 사용되면 테마로 빼놓기*/
  const desktopLayout = {
    padding: 2,
    margin: "0 auto",
    display: "flex",
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
    width: "400px",
    marginLeft: 2,
    border: "1px solid #ddd",
    padding: 2,
    borderRadius: 2,
  };

  return (
    <Box sx={desktopLayout}>
      <Sidebar />
      <Box sx={mainContentStyle}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          회원 정보
        </Typography>
        <UserCard />
        <Typography variant="h5" sx={{ mb: 1 }}>
          계정 설정
        </Typography>
        <List>{listComponents()}</List>
        {buttonComponents()}
      </Box>
      <Box sx={serveContentStyle}>{/*이미지 아무거나*/}</Box>
    </Box>
  );
};

const ProfilePage = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  return isDesktop ? <DesktopProfile /> : <MobileProfile />;
};

export default ProfilePage;

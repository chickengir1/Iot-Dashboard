import React from "react";
import UserCard from "../components/usercard/UserCardContainer";
import {
  Box,
  Typography,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import {
  DesktopLayout,
  RedRoundedButton,
  ServeContent,
  MobileLayout,
} from "../styles/index";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import DeleteIcon from "@mui/icons-material/Delete";
import { ArrowForward } from "@mui/icons-material";
import Sidebar from "../components/sidebar/sidebarcontainer";

// 페이지 고유 스타일
const mainContentStyle = {
  flexGrow: 1,
  padding: 2,
  display: "flex",
  marginLeft: 2,
  flexDirection: "column",
  border: "1px solid #ddd",
  borderRadius: 2,
};

const listItems = [
  { text: "프로필 정보 수정", icon: <EditIcon /> },
  { text: "더 많은 제품 보기", icon: <VisibilityIcon /> },
  { text: "알람 설정", icon: <NotificationsIcon /> },
];

const ListComponents = () =>
  listItems.map((item, index) => (
    <Card sx={{ mb: 4 }} key={index}>
      <ListItem button>
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
        <ArrowForward />
      </ListItem>
    </Card>
  ));

const ButtonComponents = () => (
  <Box sx={{ display: "flex", gap: 2 }}>
    <RedRoundedButton variant="contained" fullWidth startIcon={<LogoutIcon />}>
      로그아웃
    </RedRoundedButton>
    <RedRoundedButton variant="contained" fullWidth startIcon={<DeleteIcon />}>
      회원 탈퇴
    </RedRoundedButton>
  </Box>
);

const MobileProfile = () => (
  <MobileLayout>
    <Typography variant="h6" sx={{ mb: 1 }}>
      회원 정보
    </Typography>
    <UserCard />
    <Typography variant="h6" sx={{ mb: 1 }}>
      계정 설정
    </Typography>
    <List>
      <ListComponents />
    </List>
    <ButtonComponents />
    <Sidebar />
  </MobileLayout>
);

const DesktopProfile = () => (
  <DesktopLayout>
    <Sidebar />
    <Box sx={mainContentStyle}>
      <Typography variant="h5" sx={{ mb: 1 }}>
        회원 정보
      </Typography>
      <UserCard />
      <Typography variant="h5" sx={{ mb: 1 }}>
        계정 설정
      </Typography>
      <List>
        <ListComponents />
      </List>
      <ButtonComponents />
    </Box>
    <ServeContent />
  </DesktopLayout>
);

const ProfilePage = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  return isDesktop ? <DesktopProfile /> : <MobileProfile />;
};

export default ProfilePage;

import React from "react";
import UserCard from "../components/usercard/UserCardContainer";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Card,
} from "@mui/material";
import {
  DesktopLayout,
  RedRoundedButton,
  ServeContent,
  MobileLayout,
  MainLayout,
} from "../styles/index";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LogoutIcon from "@mui/icons-material/Logout";
import DeleteIcon from "@mui/icons-material/Delete";
import { ArrowForward, LockReset } from "@mui/icons-material";
import Sidebar from "../components/sidebar/SidebarContainer";
import usePostRequest from "../hooks/usePostRequest";
import { useNavigate } from "react-router-dom";

const api = "/api/auth/logout";

const listItems = [
  { text: "프로필 정보 수정", icon: <EditIcon /> },
  { text: "비밀번호 초기화", icon: <LockReset /> },
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

const ButtonComponents = ({ onLogout }) => (
  <Box sx={{ display: "flex", gap: 2 }}>
    <RedRoundedButton
      variant="contained"
      fullWidth
      startIcon={<LogoutIcon />}
      onClick={onLogout}
    >
      로그아웃
    </RedRoundedButton>
    <RedRoundedButton variant="contained" fullWidth startIcon={<DeleteIcon />}>
      회원 탈퇴
    </RedRoundedButton>
  </Box>
);

const MobileProfile = ({ onLogout }) => (
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
    <ButtonComponents onLogout={onLogout} />
    <Sidebar />
  </MobileLayout>
);

const DesktopProfile = ({ onLogout }) => (
  <DesktopLayout>
    <Sidebar />
    <MainLayout>
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
      <ButtonComponents onLogout={onLogout} />
    </MainLayout>
    <ServeContent />
  </DesktopLayout>
);

const ProfilePage = () => {
  const { postData } = usePostRequest(api);
  const navigate = useNavigate();
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  const handleLogout = async () => {
    try {
      await postData();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return isDesktop ? (
    <DesktopProfile onLogout={handleLogout} />
  ) : (
    <MobileProfile onLogout={handleLogout} />
  );
};

export default ProfilePage;

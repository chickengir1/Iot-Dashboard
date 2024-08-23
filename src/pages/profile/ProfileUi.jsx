import React from "react";
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  Box,
} from "@mui/material";
import {
  Edit as EditIcon,
  Visibility as VisibilityIcon,
  LockReset as LockResetIcon,
  ArrowForward,
  Logout as LogoutIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { RedRoundedButton } from "../../styles";
import { mainContentConfig } from "../../styles/layoutConfig";
import { ServeContent } from "../../styles";
import Sidebar from "../../components/sidebar/SidebarContainer";
import UserCard from "../../components/usercard/UserCardContainer";

const listItems = [
  { text: "프로필 정보 수정", icon: <EditIcon /> },
  { text: "비밀번호 초기화", icon: <LockResetIcon /> },
  { text: "더 많은 제품 보기", icon: <VisibilityIcon /> },
];

const ListComponents = () =>
  listItems.map((item, index) => (
    <Card sx={{ mb: 4 }} key={index}>
      <ListItem button sx={{ minHeight: "65px" }}>
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

const ProfileUI = ({ onLogout, isDesktop }) => {
  const { Layout, MainLayout } = mainContentConfig(isDesktop);

  return (
    <Layout>
      <Sidebar />
      <MainLayout>
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
      </MainLayout>
      {isDesktop && <ServeContent />}
    </Layout>
  );
};

export default ProfileUI;

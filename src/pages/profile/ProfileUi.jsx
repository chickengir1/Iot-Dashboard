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
  { text: "프로필 정보 수정", icon: <EditIcon />, action: null },
  { text: "더 많은 제품 보기", icon: <VisibilityIcon />, action: "pageMove" },
];

const ListComponents = ({ onPageMove }) =>
  listItems.map((item) => (
    <Card sx={{ mb: 4 }} key={item.text}>
      <ListItem
        button
        sx={{ minHeight: "65px" }}
        onClick={() => {
          if (item.action === "pageMove") onPageMove();
        }}
      >
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.text} />
        <ArrowForward />
      </ListItem>
    </Card>
  ));

const ButtonComponents = ({ onLogout, onDeleteAccount }) => (
  <Box sx={{ display: "flex", gap: 2 }}>
    <RedRoundedButton
      variant="contained"
      fullWidth
      startIcon={<LogoutIcon />}
      onClick={onLogout}
    >
      로그아웃
    </RedRoundedButton>
    <RedRoundedButton
      variant="contained"
      fullWidth
      startIcon={<DeleteIcon />}
      onClick={onDeleteAccount}
    >
      회원 탈퇴
    </RedRoundedButton>
  </Box>
);

const ProfileUI = ({ onLogout, isDesktop, onPageMove, onDeleteAccount }) => {
  const { Layout, MainLayout } = mainContentConfig(isDesktop);

  return (
    <Layout>
      <Sidebar />
      <MainLayout>
        <UserCard />
        <Typography variant="h6" sx={{ mb: 1 }}>
          계정 설정
        </Typography>
        <List>
          <ListComponents onPageMove={onPageMove} />
        </List>
        <ButtonComponents
          onLogout={onLogout}
          onDeleteAccount={onDeleteAccount}
        />
      </MainLayout>
      {isDesktop && <ServeContent />}
    </Layout>
  );
};

export default ProfileUI;

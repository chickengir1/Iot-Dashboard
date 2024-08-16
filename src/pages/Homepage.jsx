import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { DesktopLayout, MobileLayout, MainLayout } from "../styles/index";
import Usercard from "../components/usercard/UserCardContainer";
import Weather from "../components/weather/WeatherContainer";
import TodoList from "../components/todolist/TodoListContainer";
import Newsletter from "../components/newsletter/NewsletterContainer";
import Sidebar from "../components/sidebar/SidebarContainer";

const styles = {
  serveContentStyle: {
    width: "400px",
    marginLeft: 2,
    border: "1px solid #ddd",
    padding: 2,
    borderRadius: 2,
  },
};

const MainComponent = () => (
  <>
    <Usercard />
    <Card>
      <CardContent>
        <Typography variant="subtitle1">나중에 팀 이미지로 대체</Typography>
      </CardContent>
    </Card>
    <Weather />
    <TodoList />
  </>
);

const MobileHomeLayout = () => (
  <MobileLayout>
    <MainComponent />
    <Newsletter />
    <Sidebar />
  </MobileLayout>
);

const DesktopHomeLayout = () => (
  <DesktopLayout>
    <Sidebar />
    <MainLayout>
      <MainComponent />
    </MainLayout>
    <Box sx={styles.serveContentStyle}>
      <Typography variant="subtitle1">Today Weather</Typography>
      <Weather />
      <Typography variant="subtitle1">News Letter</Typography>
      <Newsletter />
    </Box>
  </DesktopLayout>
);

const Homepage = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return isDesktop ? <DesktopHomeLayout /> : <MobileHomeLayout />;
};

export default Homepage;

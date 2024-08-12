import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import Usercard from "../components/usercard/UserCardContainer";
import Weather from "../components/weather/WeatherContainer";
import TodoList from "../components/todolist/TodoListContainer";
import Newsletter from "../components/newsletter/NewsletterContainer";
import Sidebar from "../components/sidebar/sidebarcontainer";

const MobileLayout = () => {
  const mobileLayout = {
    padding: 2,
    width: "100%",
    margin: "0 auto",
  };

  return (
    <Box sx={mobileLayout}>
      <Usercard />
      <Weather />
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle1">나중에 팀 이미지로 대체</Typography>
        </CardContent>
      </Card>
      <TodoList />
      <Newsletter />
      <Box>{/*사이드바 임포트 해오기 */}</Box>
    </Box>
  );
};

const DesktopLayout = () => {
  const desktopLayout = {
    padding: 2,
    margin: "0 auto",
    display: "flex",
  };

  const mainContentStyle = {
    flexGrow: 1,
    display: "flex",
    marginLeft: "16px",
    flexDirection: "column",
  };

  return (
    <Box sx={desktopLayout}>
      <Sidebar />
      <Box sx={mainContentStyle}>
        <Usercard />
        <Card sx={{ mb: 2 }}>
          <CardContent>
            <Typography variant="subtitle1">나중에 팀 이미지로 대체</Typography>
          </CardContent>
        </Card>
        <Weather />
        <TodoList />
      </Box>
      <Box sx={{ width: "400px", ml: 2 }}>
        <Weather />
        <Newsletter />
      </Box>
    </Box>
  );
};

const Homepage = () => {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  return isDesktop ? <DesktopLayout /> : <MobileLayout />;
};

export default Homepage;

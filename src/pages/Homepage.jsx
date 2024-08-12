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
      <Sidebar />
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
    padding: 2,
    display: "flex",
    marginLeft: "16px",
    flexDirection: "column",
    border: "1px solid #ddd",
    borderRadius: "8px",
  };

  const serveContentStyle = {
    width: "400px",
    marginLeft: "16px",
    border: "1px solid #ddd",
    padding: 2,
    borderRadius: "8px",
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
      <Box sx={serveContentStyle}>
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

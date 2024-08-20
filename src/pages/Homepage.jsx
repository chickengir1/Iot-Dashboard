import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";
import { breakpoints } from "../utils/commonUtils"; // breakpoints 적용
import { mainContentConfig } from "../styles/layoutConfig"; // layoutConfig 적용
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

const MobileHomeLayout = ({ Layout }) => (
  <Layout>
    <MainComponent />
    <Newsletter />
    <Sidebar />
  </Layout>
);

const DesktopHomeLayout = ({ Layout, MainLayout }) => (
  <Layout>
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
  </Layout>
);

const Homepage = () => {
  const isDesktop = useMediaQuery(breakpoints.mainContent);
  const { Layout, MainLayout } = mainContentConfig(isDesktop);

  return isDesktop ? (
    <DesktopHomeLayout Layout={Layout} MainLayout={MainLayout} />
  ) : (
    <MobileHomeLayout Layout={Layout} />
  );
};

export default Homepage;

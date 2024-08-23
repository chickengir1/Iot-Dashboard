import React from "react";
import { mainContentConfig } from "../../styles/layoutConfig";
import Sidebar from "../../components/sidebar/SidebarContainer";
import UserCard from "../../components/usercard/UserCardContainer";
import { ServeContent } from "../../styles";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Weather from "../../components/weather/WeatherContainer";
import Newsletter from "../../components/newsletter/NewsletterContainer";

const HomeUi = ({ isDesktop }) => {
  const styles = {
    serveContentStyle: {
      width: "400px",
      marginLeft: 2,
      border: "1px solid #ddd",
      padding: 2,
      borderRadius: 2,
    },
  };

  const { Layout, MainLayout } = mainContentConfig(isDesktop);
  return (
    <>
      <Layout>
        <Sidebar />
        <MainLayout>
          <UserCard />
          <Card>
            <CardContent>
              <Typography variant="subtitle1">
                나중에 팀 이미지로 대체
              </Typography>
            </CardContent>
          </Card>
          <Weather />
        </MainLayout>
        {isDesktop && (
          <Box sx={styles.serveContentStyle}>
            <Typography variant="subtitle1">Today Weather</Typography>
            <Weather />
            <Typography variant="subtitle1">News Letter</Typography>
            <Newsletter />
          </Box>
        )}
      </Layout>
    </>
  );
};

export default HomeUi;

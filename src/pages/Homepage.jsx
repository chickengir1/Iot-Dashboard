import React from "react";
import { Box, Typography, Card, CardContent } from "@mui/material";
import Usercard from "../components/usercard/UserCardContainer";
import Weather from "../components/weather/WeatherContainer";
import TodoList from "../components/todolist/TodoListContainer";
import Newsletter from "../components/newsletter/NewsletterContainer";

const Homepage = () => {
  const HomePageLayout = {
    padding: 2,
    width: "412px",
    margin: "0 auto",
  };

  return (
    <Box sx={HomePageLayout}>
      <Usercard />
      <Weather />
      {/*팀 이미지 나중에 따로 만들기*/}
      <Card sx={{ mb: 2 }}>
        <CardContent>
          <Typography variant="subtitle1">나중에 팀 이미지로 대체</Typography>
        </CardContent>
      </Card>
      {/*팀 이미지 나중에 따로 만들기*/}
      <TodoList />
      <Newsletter />
      <Box>{/*사이드바 임포트 해오기 */}</Box>
    </Box>
  );
};

export default Homepage;

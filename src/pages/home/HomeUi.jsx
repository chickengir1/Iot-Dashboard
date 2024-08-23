import React from "react";
import { mainContentConfig } from "../../styles/layoutConfig";
import Sidebar from "../../components/sidebar/SidebarContainer";
import UserCard from "../../components/usercard/UserCardContainer";
import { Box, Card, CardContent, Typography } from "@mui/material";
import Weather from "../../components/weather/WeatherContainer";
import Newsletter from "../../components/newsletter/NewsletterContainer";
import TodoList from "../../components/todolist/TodoListContainer";
import { BlueRoundedButton } from "../../styles";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import Modal from "../../components/modal/ModalContainer";
import TodoModal from "../../components/todoModal/todoModalContainer";

const HomeUi = ({ isDesktop, onOpen, todos, setTodos, setNotification }) => {
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
      <Modal>
        <TodoModal
          todos={todos}
          setTodos={setTodos}
          setNotification={setNotification}
        />
      </Modal>

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
          <Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <Typography>Todo list</Typography>
              <BlueRoundedButton
                variant="contained"
                endIcon={<AddCircleOutlineOutlined />}
                onClick={onOpen}
              >
                할 일 추가하기
              </BlueRoundedButton>
            </Box>
            <TodoList todos={todos} setTodos={setTodos} height="40vh" />
          </Box>
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

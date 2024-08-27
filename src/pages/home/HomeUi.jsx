import { mainContentConfig } from "@styles/layoutConfig";
import Sidebar from "@components/sidebar/SidebarContainer";
import UserCard from "@components/usercard/UserCardContainer";
import { Box, Typography } from "@mui/material";
import Weather from "@components/weather/WeatherContainer";
import Newsletter from "@components/newsletter/NewsletterContainer";
import TodoList from "@components/todolist/TodoListContainer";
import { BlueRoundedButton } from "@styles";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import TodoModal from "@components/todoModal/todoModalContainer";

const HomeUi = ({ isDesktop, onOpen, todos, setTodos, setNotification }) => {
  const styles = {
    serveContentStyle: {
      width: "400px",
      marginLeft: 2,
      border: "1px solid #ddd",
      padding: 2,
      borderRadius: 2,
      background: "#F8FAFB",
    },
  };

  const { Layout, MainLayout } = mainContentConfig(isDesktop);
  return (
    <>
      <TodoModal
        todos={todos}
        setTodos={setTodos}
        setNotification={setNotification}
      />
      <Layout>
        <Sidebar />
        <MainLayout>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
              justifyContent: "space-between",
            }}
          >
            <UserCard />
            <Typography variant="subtitle1">오늘 날씨</Typography>
            <Weather />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 2,
              }}
            >
              <Typography>투두 리스트</Typography>
              <BlueRoundedButton
                variant="contained"
                endIcon={<AddCircleOutlineOutlined />}
                onClick={onOpen}
              >
                할 일 추가하기
              </BlueRoundedButton>
            </Box>
            <TodoList todos={todos} setTodos={setTodos} height="30vh" />
          </Box>
        </MainLayout>
        {isDesktop && (
          <Box sx={styles.serveContentStyle}>
            <Newsletter />
          </Box>
        )}
      </Layout>
    </>
  );
};

export default HomeUi;

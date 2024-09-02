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
              justifyContent: "space-around",
            }}
          >
            <UserCard />
            <Typography variant="subtitle1" fontWeight="bold">
              오늘 날씨
            </Typography>
            <Weather />
            <TodoList todos={todos} setTodos={setTodos} height="14rem" />
          </Box>
          <BlueRoundedButton
            variant="contained"
            endIcon={<AddCircleOutlineOutlined />}
            onClick={onOpen}
          >
            할 일 추가하기
          </BlueRoundedButton>
        </MainLayout>
        {isDesktop && (
          <Box sx={styles.serveContentStyle}>
            <Typography variant="subtitle1" fontWeight="bold">
              실시간 뉴스 정보
            </Typography>
            <Newsletter />
          </Box>
        )}
      </Layout>
    </>
  );
};

export default HomeUi;

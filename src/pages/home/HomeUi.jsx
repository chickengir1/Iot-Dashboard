import { mainContentConfig } from "@styles/layoutConfig";
import Sidebar from "@components/sidebar/SidebarContainer";
import UserCard from "@components/usercard/UserCardContainer";
import { Box, Typography } from "@mui/material";
import Weather from "@components/weather/WeatherContainer";
import Newsletter from "@components/newsletter/NewsletterContainer";
import TodoList from "@components/todolist/TodoListContainer";
import { BlueRoundedButton } from "@styles";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import TodoModal from "@components/todoModal/TodoModalContainer";

const HomeUi = ({ isDesktop, onOpen, todos, setTodos, setNotification }) => {
  const styles = {
    serveContentStyle: {
      width: "400px",
      marginLeft: 2,
      border: "3px solid rgba(176, 190, 197, 0.5)",
      padding: 2,
      borderRadius: 2,
      boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.3)",
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
              justifyContent: "space-between",
            }}
          >
            <UserCard />
            <Typography variant="subtitle1" fontWeight="bold">
              오늘 날씨
            </Typography>
            <Weather />
            <TodoList todos={todos} setTodos={setTodos} height="17em" />
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

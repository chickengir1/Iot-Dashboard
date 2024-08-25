import { mainContentConfig } from "@styles/layoutConfig";
import { Box, Typography } from "@mui/material";
import { BlueRoundedButton, ServeContent } from "@styles";
import UserCard from "@components/usercard/UserCardContainer";
import { AddCircleOutlineOutlined } from "@mui/icons-material";
import Sidebar from "@components/sidebar/SidebarContainer";
import TodoListContainer from "@components/todolist/TodoListContainer";
import TodoModal from "@components/todoModal/todoModalContainer";

const TodoUi = ({ isDesktop, setNotification, todos, setTodos, onOpen }) => {
  const { Layout, MainLayout } = mainContentConfig(isDesktop);
  return (
    <>
      <TodoModal
        setNotification={setNotification}
        todos={todos}
        setTodos={setTodos}
      />

      <Layout>
        <Sidebar />
        <MainLayout>
          <UserCard />
          <Box sx={{ flex: "1 1 100px", aspectRatio: "1/1" }}>
            <Typography variant="subtitle1">투두 리스트</Typography>
            <TodoListContainer
              todos={todos}
              setTodos={setTodos}
              height={"65vh"}
            />
          </Box>
          <BlueRoundedButton
            variant="contained"
            fullWidth
            endIcon={<AddCircleOutlineOutlined />}
            onClick={onOpen}
          >
            할 일 추가하기
          </BlueRoundedButton>
        </MainLayout>
        {isDesktop && <ServeContent />}
      </Layout>
    </>
  );
};

export default TodoUi;

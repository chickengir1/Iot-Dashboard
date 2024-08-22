import React, { useState } from "react";
import { handleFormSubmit } from "../../utils/handleSubmit";
import TodoUi from "./TodoUi";
import { useMediaQuery, Box } from "@mui/material";
import { breakpoints } from "../../utils/commonUtils";
import { useDispatch } from "react-redux";
import { todoFields as fields } from "../../utils/formFields";
import Notification from "../../components/notification/NotificationContainer";
import { setModalType } from "../../redux/actions/modalAction";
import { get, save } from "../../utils/localStorage";

const TodoContainer = () => {
  const [notification, setNotification] = useState({
    message: "success",
    type: "success",
    open: false,
  });

  const [todos, setTodos] = useState(get("todos") || []);

  const dispatch = useDispatch();

  const isDesktop = useMediaQuery(breakpoints.mainContent);

  // 나중에 타입만 넘겨주면 되도록 함수 빼내면 좋을 듯.
  const handleAddToDo = () => {
    dispatch(setModalType("todo"));
  };

  // 다른 함수 파일로 빼낼 지 고민 중(handleToggle,handleDelete,onSubmit)
  const handleToggle = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isFinish: !todo.isFinish } : todo
    );
    setTodos(updatedTodos);
    save("todos", updatedTodos);
  };

  const handleDelete = (id) => {
    if (window.confirm("삭제하시겠습니까?")) {
      const updatedTodos = todos.filter((todo) => todo.id !== id);
      setTodos(updatedTodos);
      save("todos", updatedTodos);
    }
  };

  const getFormattedDate = () => {
    const date = new Date();
    const koreanDate = new Date(date.getTime() + 9 * 60 * 60 * 1000);
    return koreanDate.toISOString().split("T")[0];
  };

  const onSubmit = (formValues) => {
    const formData = {
      id: Date.now(),
      date: getFormattedDate(),
      description: formValues.todo,
      isFinish: false,
    };

    // 여기 부분이 아직 이해가 잘 안됨.
    const todoresponse = handleFormSubmit({
      formData,
      setNotification,
      dispatch,
      actionType: "todo",
      successMessageHandler: (res) => "할 일이 성공적으로 추가되었습니다!",
      errorMessageHandler: (error) => `오류가 발생했습니다: ${error.message}`,
    });

    if (todoresponse) {
      const updatedTodos = [...todos, formData];
      setTodos(updatedTodos);
      save("todos", updatedTodos);

      setNotification({
        message: "할 일이 성공적으로 추가되었습니다!",
        type: "success",
        open: true,
      });
      dispatch(setModalType());
    }
  };

  return (
    <Box>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <TodoUi
        isDesktop={isDesktop}
        formFields={fields}
        onSubmit={onSubmit}
        onOpen={handleAddToDo}
        onDelete={handleDelete}
        onToggle={handleToggle}
        todos={todos}
      />
    </Box>
  );
};

export default TodoContainer;

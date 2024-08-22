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
import { getResponseMessage } from "../../error/getResponseMessage";

const TodoContainer = () => {
  const [notification, setNotification] = useState({
    message: "success",
    type: "",
    open: false,
  });

  const [todos, setTodos] = useState(get("todos") || []);

  const dispatch = useDispatch();

  const isDesktop = useMediaQuery(breakpoints.mainContent);

  const handleAddToDo = () => {
    dispatch(setModalType("todo"));
  };

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

    const postData = async (data) => {
      try {
        const currentTodos = get("todos") || [];
        const updatedTodos = [...currentTodos, data];
        save("todos", updatedTodos);
        return { message: "할일 추가 완료!" };
      } catch (error) {
        throw new Error(error);
      }
    };

    const todoresponse = handleFormSubmit({
      formData,
      postData,
      setNotification,
      dispatch,
      actionType: "todo",
      successMessageHandler: getResponseMessage,
      errorMessageHandler: (error) => getResponseMessage(null, error),
    });

    if (todoresponse) {
      const updatedTodos = [...todos, formData];
      setTodos(updatedTodos);
      save("todos", updatedTodos);
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

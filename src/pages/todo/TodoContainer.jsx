import { useState } from "react";
import TodoUi from "./TodoUi";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "../../utils/commonUtils";
import { useDispatch } from "react-redux";
import { FormProvider, useForm } from "react-hook-form";
import { todoFields as fields } from "../../utils/formFields";
import Notification from "../../components/notification/NotificationContainer";
import { setModalType } from "../../redux/actions/modalAction";
import { get } from "../../utils/localStorage";

const TodoContainer = () => {
  const [notification, setNotification] = useState({
    message: "success",
    type: "",
    open: false,
  });
  const [todos, setTodos] = useState(get("todos") || []);

  const isDesktop = useMediaQuery(breakpoints.mainContent);
  const dispatch = useDispatch();
  const combined = useForm();

  const handleAddToDo = () => {
    dispatch(setModalType("todo"));
  };

  return (
    <FormProvider {...combined}>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <TodoUi
        isDesktop={isDesktop}
        formFields={fields}
        onOpen={handleAddToDo}
        setNotification={setNotification}
        todos={todos}
        setTodos={setTodos}
      />
    </FormProvider>
  );
};

export default TodoContainer;

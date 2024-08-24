import HomeUi from "./HomeUi";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "@utils/commonUtils";
import { FormProvider, useForm } from "react-hook-form";
import { setModalType } from "@redux/actions/modalAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { get } from "@utils/localStorage";
import Notification from "@components/notification/NotificationContainer";
import { useAuth } from "@error/authError";

const HomeContainer = () => {
  const [notification, setNotification] = useState({
    message: "success",
    type: "",
    open: false,
  });
  const [todos, setTodos] = useState(get("todos") || []);

  const isDesktop = useMediaQuery(breakpoints.mainContent);
  const combined = useForm();
  const dispatch = useDispatch();
  useAuth();

  const handleAddToDo = () => {
    dispatch(setModalType("todo"));
  };

  return (
    <FormProvider {...combined}>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <HomeUi
        todos={todos}
        setTodos={setTodos}
        isDesktop={isDesktop}
        onOpen={handleAddToDo}
        combined={combined}
        setNotification={setNotification}
      />
    </FormProvider>
  );
};

export default HomeContainer;

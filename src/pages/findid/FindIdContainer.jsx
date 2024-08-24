import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import FindIdUi from "./FindIdUi";
import usePostRequest from "@hooks/usePostRequest";
import { getResponseMessage } from "@error/getResponseMessage";
import { handleFormSubmit } from "@utils/handleSubmit";
import { delay, breakpoints } from "@utils/commonUtils";
import Notification from "@components/notification/NotificationContainer";

const FindIDPage = () => {
  const [notification, setNotification] = useState({
    message: null,
    type: "",
    open: false,
  });

  const isDesktop = useMediaQuery(breakpoints.Account);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const combined = useForm();

  const { postData } = usePostRequest("/api/auth/find-id");

  const onSubmit = async (formValues) => {
    const completeEmail = `${formValues.email}@${formValues.domain}`;

    const formData = {
      email: completeEmail,
    };

    const response = await handleFormSubmit({
      formData,
      postData,
      setNotification,
      dispatch,
      actionType: "findId",
      successMessageHandler: getResponseMessage,
      errorMessageHandler: (error) => getResponseMessage(null, error),
    });

    if (response.message == "사용자 아이디가 이메일 주소로 전송되었습니다.") {
      await delay(1000);
      navigate("/");
    }
  };

  return (
    <FormProvider {...combined}>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <FindIdUi
        combined={combined}
        isDesktop={isDesktop}
        onSubmit={combined.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
};

export default FindIDPage;

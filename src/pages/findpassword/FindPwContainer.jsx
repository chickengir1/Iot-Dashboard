import useNotification from "@hooks/useNotification";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import usePostRequest from "@hooks/usePostRequest";
import { delay, breakpoints } from "@utils/commonUtils";
import { getResponseMessage } from "@error/getResponseMessage";
import Notification from "@components/notification/NotificationContainer";
import { findPasswordFormFields as fields } from "@utils/formFields";
import FindPwUi from "./FindPwUi";
import { handleFormSubmit } from "@utils/handleSubmit";

const FindPasswordPage = () => {
  const { notification, setNotification } = useNotification();

  const isDesktop = useMediaQuery(breakpoints.Account);
  const dispatch = useDispatch();
  const combined = useForm();
  const navigate = useNavigate();

  const { postData } = usePostRequest("/api/auth/forgot-password");

  const onSubmit = async (formValues) => {
    const completeEmail = `${formValues.email}@${formValues.domain}`;

    const formData = {
      id: formValues.id,
      email: completeEmail,
    };

    const response = handleFormSubmit({
      formData,
      postData,
      setNotification,
      dispatch,
      actionType: "findPassword",
      successMessageHandler: getResponseMessage,
      errorMessageHandler: (error) => getResponseMessage(null, error),
    });

    if (response.message == "비밀번호 재설정 메일이 발송되었습니다.") {
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
      <FindPwUi
        formFields={fields}
        onSubmit={combined.handleSubmit(onSubmit)}
        combined={combined}
        isDesktop={isDesktop}
      />
    </FormProvider>
  );
};

export default FindPasswordPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "@mui/material";
import usePostRequest from "../../hooks/usePostRequest";
import { handleFormSubmit } from "../../utils/handleSubmit";
import { getResponseMessage } from "../../error/getResponseMessage";
import { signupFormFields } from "../../utils/formFields";
import SignUpUi from "./SignUpUi";
import { delay, breakpoints } from "../../utils/commonUtils";
import Notification from "../../components/notification/NotificationContainer";

const SignUpContainer = () => {
  const [notification, setNotification] = useState({
    message: null,
    type: "",
    open: false,
  });

  const isDesktop = useMediaQuery(breakpoints.Account);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const combined = useForm();

  const { postData } = usePostRequest("/api/auth/register");

  const onSubmit = async (formValues) => {
    const completeEmail = `${formValues.email}@${formValues.domain}`;
    const formData = {
      id: formValues.id,
      password: formValues.password,
      confirmPassword: formValues.confirmPassword,
      email: completeEmail,
    };

    const response = await handleFormSubmit({
      formData,
      postData,
      setNotification,
      dispatch,
      actionType: "signup",
      successMessageHandler: getResponseMessage,
      errorMessageHandler: (error) => getResponseMessage(null, error),
    });

    if (response && response.success) {
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
      <SignUpUi
        combined={combined}
        isDesktop={isDesktop}
        formFields={signupFormFields}
        onSubmit={combined.handleSubmit(onSubmit)}
      />
    </FormProvider>
  );
};

export default SignUpContainer;

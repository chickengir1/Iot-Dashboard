import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { API_PATHS } from "@utils/apiMap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { loginFormFields as fields } from "@utils/formFields";
import usePostRequest from "@hooks/usePostRequest";
import { handleFormSubmit } from "@utils/handleSubmit";
import { updateProfileData } from "@utils/saveProfile";
import { getResponseMessage } from "@error/getResponseMessage";
import { get } from "@utils/localStorage";
import LoginUi from "./LoginUi";
import { delay } from "@utils/commonUtils";
import useNotification from "@hooks/useNotification";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";

const LoginPage = () => {
  const { notification, setNotification } = useNotification();
  const [remember, setRemember] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const combined = useForm();
  const isDesktop = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    const savedRemember = get("remember");
    if (savedRemember !== null) {
      setRemember(savedRemember);
    }

    const savedProfile = get("userProfile");
    if (savedProfile) {
      const { userId, email } = savedProfile;
      combined.setValue("id", userId);
      combined.setValue("email", email);
    }
  }, [combined]);

  const { postData } = usePostRequest(API_PATHS.LOGIN);

  const onSubmit = async (formValues) => {
    const completeEmail = `${formValues.email}@${formValues.domain}`;
    const formData = {
      id: formValues.id,
      password: formValues.password,
      email: completeEmail,
    };

    dispatch(startLoading());

    try {
      const response = await handleFormSubmit({
        formData,
        postData,
        setNotification,
        dispatch,
        actionType: "login",
        successMessageHandler: getResponseMessage,
        errorMessageHandler: (error) => getResponseMessage(null, error),
      });

      updateProfileData(response, remember, dispatch);

      if (response.message === "로그인 성공!") {
        await delay(1000);
        navigate("/home");
      }
    } catch (error) {
      console.error(error.cause);
    } finally {
      dispatch(stopLoading());
    }
  };

  return (
    <LoginUi
      onSubmit={combined.handleSubmit(onSubmit)}
      combined={combined}
      fields={fields}
      notification={notification}
      setNotification={setNotification}
      isDesktop={isDesktop}
      remember={remember}
      handleRemember={(e) => setRemember(e.target.checked)}
    />
  );
};

export default LoginPage;

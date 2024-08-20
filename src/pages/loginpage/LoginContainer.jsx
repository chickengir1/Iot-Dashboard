import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { loginFormFields } from "../../utils/formFields";
import { setProfileData } from "../../redux/actions/profileActions";
import usePostRequest from "../../hooks/usePostRequest";
import { handleFormSubmit } from "../../utils/handleSubmit";
import { getResponseMessage } from "../../error/getResponseMessage";
import LoginUi from "./LoginUi";

const LoginPageContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const combined = useForm();
  const isDesktop = useMediaQuery("(min-width:600px)"); // 얘 나중에 상수로 추출
  const [notification, setNotification] = useState({
    message: null,
    type: "",
    open: false,
  });

  const { postData } = usePostRequest("/api/auth/login");

  const onSubmit = async (formValues) => {
    const completeEmail = `${formValues.email}@${formValues.domain}`;
    const formData = {
      id: formValues.id,
      password: formValues.password,
      email: completeEmail,
    };

    const response = await handleFormSubmit({
      formData,
      postData,
      setNotification,
      dispatch,
      actionType: "login",
      successMessageHandler: getResponseMessage,
      errorMessageHandler: (error) => getResponseMessage(null, error),
    });

    if (response && response.user) {
      const profileData = {
        userId: response.user.userId,
        email: response.user.email,
        createdAt: response.user.created_at,
      };

      await dispatch(setProfileData(profileData));

      setTimeout(() => {
        navigate("/home");
      }, 1000);
    }
  };

  return (
    <LoginUi
      onSubmit={combined.handleSubmit(onSubmit)}
      combined={combined}
      formFields={loginFormFields}
      // 아랫 부분은 미디어 쿼리 및 노티 상태
      notification={notification}
      setNotification={setNotification}
      isDesktop={isDesktop}
    />
  );
};

export default LoginPageContainer;

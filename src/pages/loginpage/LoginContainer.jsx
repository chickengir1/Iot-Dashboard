import React, { useState, useEffect } from "react";
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

const getEmail = (email) => email.split("@")[0];

const LoginPageContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const combined = useForm();

  const isDesktop = useMediaQuery("(min-width:600px)");

  const [notification, setNotification] = useState({
    message: null,
    type: "",
    open: false,
  });

  const [rememberLogin, setRememberLogin] = useState(false);

  useEffect(() => {
    const savedLogin = localStorage.getItem("rememberLogin");
    if (savedLogin !== null) {
      setRememberLogin(JSON.parse(savedLogin));
    }

    const savedUserProfile = localStorage.getItem("userProfile");
    if (savedUserProfile) {
      const user = JSON.parse(savedUserProfile);
      combined.setValue("id", user.userId);
      combined.setValue("email", getEmail(user.email));
    }
  }, [combined]);

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

      if (rememberLogin) {
        localStorage.setItem("userProfile", JSON.stringify(response.user));
      }

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
      notification={notification}
      setNotification={setNotification}
      isDesktop={isDesktop}
      rememberLogin={rememberLogin}
      setRememberLogin={setRememberLogin}
    />
  );
};

export default LoginPageContainer;

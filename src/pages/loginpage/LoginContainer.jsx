import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { loginFormFields as fields } from "../../utils/formFields";
import { setProfileData } from "../../redux/actions/profileActions";
import usePostRequest from "../../hooks/usePostRequest";
import { handleFormSubmit } from "../../utils/handleSubmit";
import { getResponseMessage } from "../../error/getResponseMessage";
import { save, get, remove } from "../../utils/localStorage";
import LoginUi from "./LoginUi";

const getEmail = (email) => email.split("@")[0];

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const combined = useForm();
  const isDesktop = useMediaQuery("(min-width:600px)");

  const [notification, setNotification] = useState({
    message: null,
    type: "",
    open: false,
  });

  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const savedRemember = get("remember");
    if (savedRemember !== null) {
      setRemember(savedRemember);
    }

    const savedProfile = get("userProfile");
    if (savedProfile) {
      const { userId, email } = savedProfile;
      combined.setValue("id", userId);
      combined.setValue("email", getEmail(email));
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

      if (remember) {
        save("userProfile", response.user);
        save("remember", remember);
      } else {
        remove("userProfile");
        remove("remember");
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

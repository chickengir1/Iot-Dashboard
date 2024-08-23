import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import usePostRequest from "../../hooks/usePostRequest";
import { delay } from "../../utils/commonUtils";
import ProfileUi from "./ProfileUi";
import Notification from "../../components/notification/NotificationContainer";
import { breakpoints } from "../../utils/commonUtils";

const ProfilePage = () => {
  const api = "/api/auth/logout";
  const [notification, setNotification] = useState({
    message: null,
    type: "",
    open: false,
  });
  const { postData } = usePostRequest(api);
  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.mainContent);

  const handleLogout = async () => {
    try {
      const response = await postData();
      const { message } = response;

      setNotification({
        message: message,
        type: "success",
        open: true,
      });

      if (message === "성공적으로 로그아웃되었습니다.") {
        await delay(500);
        navigate("/");
      }
    } catch (error) {
      setNotification({
        message: error.response?.data?.message || "Logout failed.",
        type: "error",
        open: true,
      });
    }
  };

  return (
    <>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <ProfileUi onLogout={handleLogout} isDesktop={isDesktop} />
    </>
  );
};

export default ProfilePage;

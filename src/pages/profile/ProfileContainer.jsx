import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import usePostRequest from "@hooks/usePostRequest";
import { delay } from "@utils/commonUtils";
import ProfileUi from "./ProfileUi";
import Notification from "@components/notification/NotificationContainer";
import { breakpoints } from "@utils/commonUtils";
import { useAuth } from "@error/authError";

const ProfilePage = () => {
  useAuth();
  const apiLogout = "/api/auth/logout";
  const apiDeleteAccount = "/api/auth/delete";

  const { postData: postLogout } = usePostRequest(apiLogout);
  const { postData: postDeleteAccount } = usePostRequest(apiDeleteAccount);

  const [notification, setNotification] = useState({
    message: null,
    type: "",
    open: false,
  });

  const navigate = useNavigate();
  const isDesktop = useMediaQuery(breakpoints.mainContent);

  const handleAction = async (actionType) => {
    try {
      let response;

      if (actionType === "logout") {
        response = await postLogout();
        handleSuccess(response.message, "/");
        return;
      }

      if (actionType === "deleteAccount") {
        response = await postDeleteAccount();
        handleSuccess(response.message, "/");
        return;
      }
    } catch (error) {
      setNotification({
        message: error.response?.data?.message || "다시 시도해주세요",
        type: "error",
        open: true,
      });
    }
  };

  const handleSuccess = (message, redirectPath = null) => {
    setNotification({
      message: message,
      type: "success",
      open: true,
    });

    if (redirectPath) {
      delay(500).then(() => navigate(redirectPath));
    }
  };

  const anotherProduct = () => {
    window.open("http://34.64.173.146/", "_blank");
  };

  return (
    <>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      <ProfileUi
        onLogout={() => handleAction("logout")}
        onDeleteAccount={() => handleAction("deleteAccount")}
        onPageMove={anotherProduct}
        isDesktop={isDesktop}
      />
    </>
  );
};

export default ProfilePage;

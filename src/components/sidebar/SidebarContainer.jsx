import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import { Home, Settings, Person, CheckBox } from "@mui/icons-material";
import SidebarDesktop from "./SidebarDesktop";
import SidebarMobile from "./SidebarMobile";
import Notification from "@components/notification/NotificationContainer";
import { navigateTo } from "@redux/actions/navigateAction";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";
import usePostRequest from "@hooks/usePostRequest";
import useNotification from "@hooks/useNotification";
import { API_PATHS } from "@utils/apiMap";
import { delay } from "@utils/commonUtils";

const SidebarContainer = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentRoute = useSelector((state) => state.navigation.currentRoute);
  const isMobile = useMediaQuery("(max-width:1279px)");

  const { notification, setNotification } = useNotification();
  const { postData } = usePostRequest(API_PATHS.LOGOUT);

  const menuItems = [
    { text: "Home", icon: <Home />, route: "/home" },
    { text: "Device", icon: <Settings />, route: "/devices" },
    { text: "Profile", icon: <Person />, route: "/profile" },
    { text: "Todo list", icon: <CheckBox />, route: "/todolist" },
  ];

  const handleNavigate = (route) => {
    dispatch(navigateTo(route));
    navigate(route);
  };

  const handleLogout = async () => {
    dispatch(startLoading());
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
        sessionStorage.clear();
        navigate("/");
      }
    } catch (error) {
      setNotification({
        message: error.response?.data?.message || "다시 시도해주세요",
        type: "error",
        open: true,
      });
    } finally {
      dispatch(stopLoading());
    }
  };

  return (
    <>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
      {isMobile ? (
        <SidebarMobile menuItems={menuItems} onMenuClick={handleNavigate} />
      ) : (
        <SidebarDesktop
          menuItems={menuItems}
          currentRoute={currentRoute}
          onMenuClick={handleNavigate}
          handleLogout={handleLogout}
        />
      )}
    </>
  );
};

export default SidebarContainer;

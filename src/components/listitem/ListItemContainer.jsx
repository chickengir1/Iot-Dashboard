import React from "react";
import { useNavigate } from "react-router-dom";
import ListItemUi from "./ListItemUi";
import { useSelector } from "react-redux";
import { setDeviceIds } from "@redux/actions/deviceActions";
import { useDispatch } from "react-redux";
import useNotification from "@hooks/useNotification";
import Notification from "@components/notification/NotificationContainer";

const ListItemContainer = ({ title, description, icon, avatar = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deviceIds = useSelector((state) => state.device.deviceIds);
  const { notification, setNotification } = useNotification();

  const handleDevices = () => {
    const matchIds = deviceIds.find((deviceId) => deviceId === title);

    if (matchIds) {
      dispatch(setDeviceIds(matchIds));
      navigate("/devicesinfo");
    } else {
      setNotification({
        message: "일치하는 디바이스가 없습니다.",
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
      <ListItemUi
        title={title}
        description={description}
        icon={icon}
        avatar={avatar}
        onClick={handleDevices}
      />
    </>
  );
};

export default ListItemContainer;

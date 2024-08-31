import { useNavigate } from "react-router-dom";
import DeviceItemUi from "./deviceItemUi";
import { useDispatch, useSelector } from "react-redux";
import useNotification from "@hooks/useNotification";
import { setDeviceIds } from "@redux/actions/deviceActions";
import Notification from "@components/notification/NotificationContainer";

const DeviceItemContainer = ({ name, description }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deviceIds = useSelector((state) => state.device.deviceIds);
  const { notification, setNotification } = useNotification();

  const handleDevices = () => {
    const matchIds = deviceIds.find((deviceId) => deviceId === name);

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
      <DeviceItemUi
        name={name}
        description={description}
        onClick={handleDevices}
      />
    </>
  );
};

export default DeviceItemContainer;

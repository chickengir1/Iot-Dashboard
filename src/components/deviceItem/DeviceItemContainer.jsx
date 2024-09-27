import { useNavigate } from "react-router-dom";
import DeviceItemUi from "./DeviceItemUi";
import { useDispatch, useSelector } from "react-redux";
import useNotification from "@hooks/useNotification";
import { setDeviceIds } from "@redux/actions/deviceActions";
import Notification from "@components/notification/NotificationContainer";
import useDeleteRequest from "@hooks/useDeleteRequest";
import { API_PATHS } from "@utils/apiMap";
import { generatePath } from "react-router-dom";
import useAnchorEl from "@hooks/useAnchorEl";

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

  const { anchorEl, handleMenuOpen, handleMenuClose } = useAnchorEl();

  const { deleteData } = useDeleteRequest(
    generatePath(API_PATHS.DEVICESDETAIL, { deviceId: name })
  );

  const handleDelete = async (event) => {
    event.stopPropagation();

    try {
      const response = await deleteData();

      if (response.data) {
        setNotification({
          message: response.message,
          type: "success",
          open: true,
        });
        handleMenuClose();
      } else {
        setNotification({
          message: response.message,
          type: "error",
          open: true,
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      window.location.reload();
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
        anchorEl={anchorEl}
        onOpen={handleMenuOpen}
        onClose={handleMenuClose}
        onDelete={handleDelete}
      />
    </>
  );
};

export default DeviceItemContainer;

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

    // 기기삭제 confirm 로직 넣기
    try {
      await deleteData();

      setNotification({
        message: "디바이스가 성공적으로 삭제되었습니다.",
        type: "success",
        open: true,
      });
      handleMenuClose();
    } catch (error) {
      console.error(error);
      setNotification({
        message: "디바이스 삭제에 실패했습니다.",
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
        anchorEl={anchorEl}
        onOpen={handleMenuOpen}
        onClose={handleMenuClose}
        onDelete={handleDelete}
      />
    </>
  );
};

export default DeviceItemContainer;

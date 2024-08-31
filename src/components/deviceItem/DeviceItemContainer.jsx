import { useNavigate } from "react-router-dom";
import DeviceItemUi from "./deviceItemUi";
import { useDispatch, useSelector } from "react-redux";
import useNotification from "@hooks/useNotification";
import { setDeviceIds } from "@redux/actions/deviceActions";
import Notification from "@components/notification/NotificationContainer";
import { useState } from "react";
import useDeleteRequest from "@hooks/useDeleteRequest";
import { API_PATHS } from "@utils/apiMap";

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

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (event) => {
    event.stopPropagation();
    setAnchorEl(null);
  };

  const { deleteData } = useDeleteRequest(API_PATHS.DEVICESDETAIL(name));

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
      setAnchorEl(null);
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

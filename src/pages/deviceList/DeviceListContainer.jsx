import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import useFetchData from "@hooks/useFetchData";
import { getEmail } from "@utils/commonUtils";
import DeviceUi from "./DeviceListUi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@error/authError";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";

const DeviceList = () => {
  useAuth();
  const isDesktop = useMediaQuery("(min-width:1280px)");
  const navigate = useNavigate();
  const userEmail = "user@example.com";
  const dispatch = useDispatch();

  const { deviceList } = useFetchData("/api/devices");
  console.log(deviceList);
  const [devices, setDevices] = useState([]);

  const userName = getEmail(userEmail);

  const handleNavigate = () => {
    navigate(`/adddevices`);
  };

  useEffect(() => {
    const deviceListData = async () => {
      dispatch(startLoading());
      try {
        if (deviceList) {
          const deviceArray = await deviceList.data.map((device) => ({
            ...device,
          }));
          setDevices(deviceArray);
        }
      } catch (error) {
        console.error(error.cause);
      } finally {
        dispatch(stopLoading());
      }
    };

    deviceListData();
  }, [deviceList, dispatch]);

  console.log(devices);

  return (
    <DeviceUi
      isDesktop={isDesktop}
      devices={devices}
      userName={userName}
      handleNavigate={handleNavigate}
    />
  );
};

export default DeviceList;

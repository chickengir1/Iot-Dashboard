import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import useFetchData from "@hooks/useFetchData";
import DeviceUi from "./DeviceListUi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@error/authError";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";
import { API_PATHS } from "@utils/apiMap";
import { setDeviceIds } from "@redux/actions/deviceActions";

const DeviceList = () => {
  useAuth();

  const isDesktop = useMediaQuery("(min-width:1280px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { deviceList, isLoading } = useFetchData(API_PATHS.DEVICES);
  const [devices, setDevices] = useState([]);

  const handleNavigate = () => {
    navigate(`/adddevices`);
  };

  useEffect(() => {
    const deviceListData = async () => {
      try {
        if (deviceList) {
          const deviceArray = deviceList.data.map((device) => ({
            ...device,
          }));
          setDevices(deviceArray);

          const deviceIds = deviceList.data.map((device) => device.deviceId);
          dispatch(setDeviceIds(deviceIds));
        }
      } catch (error) {
        console.error(error.cause);
      }
    };

    deviceListData();
  }, [deviceList, dispatch]);

  useEffect(() => {
    if (isLoading) {
      dispatch(startLoading());
    } else {
      dispatch(stopLoading());
    }
  }, [isLoading, dispatch]);

  return (
    <DeviceUi
      isDesktop={isDesktop}
      devices={devices}
      handleNavigate={handleNavigate}
    />
  );
};

export default DeviceList;

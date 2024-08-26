import { useEffect, useState } from "react";
import { useMediaQuery } from "@mui/material";
import { useDispatch } from "react-redux";
import useFetchData from "@hooks/useFetchData";
import DeviceUi from "./DeviceListUi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@error/authError";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";
import { API_PATHS } from "@utils/apiMap";

const DeviceList = () => {
  useAuth();
  const isDesktop = useMediaQuery("(min-width:1280px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { deviceList } = useFetchData(API_PATHS.DEVICES);
  console.log(deviceList);
  const [devices, setDevices] = useState([]);

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
      handleNavigate={handleNavigate}
    />
  );
};

export default DeviceList;

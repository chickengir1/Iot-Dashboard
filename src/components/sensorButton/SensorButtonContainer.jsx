import usePostRequest from "@hooks/usePostRequest";
import SensorButtonUi from "./SensorButtonUi";
import { API_PATHS } from "@utils/apiMap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const SensorButtonContainer = ({ action }) => {
  const [isActive, setIsActive] = useState(false);
  const deviceId = useSelector((state) => state.device.deviceIds);

  const { postData } = usePostRequest(
    API_PATHS.DEVICECONTROL(deviceId, action)
  );

  const handleSubmit = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await postData({ state: isActive ? "on" : "off" });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    sendRequest();
  }, [isActive, postData]);

  return <SensorButtonUi isActive={isActive} onClick={handleSubmit} />;
};

export default SensorButtonContainer;

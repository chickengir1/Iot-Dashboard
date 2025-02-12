import usePostRequest from "@hooks/usePostRequest";
import SensorButtonUi from "./SensorButtonUi";
import { API_PATHS } from "@utils/apiMap";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { generatePath } from "react-router-dom";

const SensorButtonContainer = ({ action }) => {
  const [isActive, setIsActive] = useState(false);
  const deviceId = useSelector((state) => state.device.deviceIds);

  const { postData } = usePostRequest(
    generatePath(API_PATHS.DEVICECONTROL, {
      deviceId: deviceId,
      action: action,
    })
  );

  const handleSubmit = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const sendRequest = async () => {
      try {
        await postData({ state: isActive ? "on" : "off" });
      } catch (error) {
        console.error(error);
      }
    };

    sendRequest();
  }, [isActive, postData]);

  return <SensorButtonUi isActive={isActive} onClick={handleSubmit} />;
};

export default SensorButtonContainer;

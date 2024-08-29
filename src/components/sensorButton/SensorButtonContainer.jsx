import usePostRequest from "@hooks/usePostRequest";
import SensorButtonUi from "./SensorButtonUi";
import { API_PATHS } from "@utils/apiMap";
import { useEffect, useState } from "react";

const SensorButtonContainer = ({ deviceId, action }) => {
  const [isActive, setIsActive] = useState(false);
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

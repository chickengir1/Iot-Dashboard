import { useMediaQuery } from "@mui/material";
import useFetchData from "@hooks/useFetchData";
import { getEmail } from "@utils/commonUtils";
import DeviceUi from "./DeviceListUi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@error/authError";

const DeviceList = () => {
  useAuth();
  const isDesktop = useMediaQuery("(min-width:1280px)");
  const navigate = useNavigate();
  const userEmail = "user@example.com";
  // 나중에 써야됨
  // const { data: deviceData } = useFetchData(
  //   `/api/devices?email=${userEmail}`,
  //   userEmail
  // );
  const { data: deviceData } = useFetchData("./db.json");

  const devices = deviceData?.devices || [];
  const userData = deviceData?.userEmail || userEmail;

  console.log(JSON.stringify(devices));
  const userName = getEmail(userData);

  const handleNavigate = () => {
    navigate("/adddevices");
  };
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

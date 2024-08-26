import React, { useState, useEffect, useRef } from "react";
import ChartUI from "./ChartUI";
import { drawCompassChart } from "@services/chartConfig";
import { breakpoints } from "@utils/commonUtils";
import { useMediaQuery } from "@mui/material";
import { useAuth } from "@error/authError";
import useFetchData from "@hooks/useFetchData";
import { useSelector, useDispatch } from "react-redux";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";

// 센서 데이터로 가공해야함
const device = {
  name: "빅토리 농장",
  description: "Victory Farm",
  userEmail: "user@example.com",
  deviceId: 1,
  sensors: {
    조도: 85,
    습도: 45,
    온도: 22,
    토양수분: 66,
  },
};

const colors = {
  조도: "#FF6384",
  습도: "#36A2EB",
  온도: "#FFCE56",
  토양수분: "#4BC0C0",
};

const ChartContainer = () => {
  useAuth();
  const deviceId = useSelector((state) => state.device.deviceIds);
  const dispatch = useDispatch();

  const { deviceList, isLoading } = useFetchData(`api/devices/${deviceId}`);

  const [selectedSensor, setSelectedSensor] = useState("조도");
  const [deviceData, setDeviceData] = useState("");

  const svgRef = useRef();
  const sensorValue = device.sensors[selectedSensor];
  const sensorColor = colors[selectedSensor];
  const isDesktop = useMediaQuery(breakpoints.mainContent);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (deviceList) {
          setDeviceData(deviceList.data);
        }
      } catch (error) {
        console.error(error.cause);
      }
    };

    fetchData();
  }, [deviceList, dispatch]);

  useEffect(() => {
    if (sensorValue) {
      drawCompassChart(sensorValue, selectedSensor, svgRef, sensorColor);
    }
  }, [sensorValue, selectedSensor, sensorColor]);

  const handleChange = (sensorName) => {
    setSelectedSensor(sensorName);
  };

  console.log("설명 :", deviceData.description);
  console.log("이름 :", deviceData.deviceName);
  console.log("아이디 :", deviceData.deviceId);
  console.log("유저객체 :", deviceData.userId);

  if (isLoading) {
    dispatch(startLoading());
  } else {
    dispatch(stopLoading());
  }

  return (
    <ChartUI
      selectedSensor={selectedSensor}
      sensorValue={sensorValue}
      sensorColor={sensorColor}
      device={device}
      colors={colors}
      isDesktop={isDesktop}
      onChange={handleChange}
      svgRef={svgRef}
    />
  );
};

export default ChartContainer;

import React, { useState, useEffect, useRef } from "react";
import ChartUI from "./ChartUI";
import { drawCompassChart } from "@services/chartConfig";
import { breakpoints } from "@utils/commonUtils";
import { useMediaQuery } from "@mui/material";
import { useAuth } from "@error/authError";
import useFetchData from "@hooks/useFetchData";
import { useSelector, useDispatch } from "react-redux";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";
import { API_PATHS } from "@utils/apiMap";

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
  const { deviceList, isLoading } = useFetchData(
    API_PATHS.DEVICESDETAIL(deviceId)
  );

  const [selectedSensor, setSelectedSensor] = useState("조도");
  const [sensorData, setSensorData] = useState(null);
  const svgRef = useRef();
  const isDesktop = useMediaQuery(breakpoints.mainContent);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (deviceList?.data) {
          const data = deviceList.data.sensor;
          console.log(data);

          setSensorData({
            조도: data?.lux ?? null,
            온도: data?.temperature ?? null,
            습도: data?.humid ?? null,
            토양수분: data?.solid ?? null,
          });
        }
      } catch (error) {
        console.error(error.cause);
      }
    };

    fetchData();

    const intervalId = setInterval(fetchData, 600000);
    return () => clearInterval(intervalId);
  }, [deviceList]);

  useEffect(() => {
    if (sensorData && sensorData[selectedSensor] !== null) {
      const sensorValue = sensorData[selectedSensor];
      const sensorColor = colors[selectedSensor];
      drawCompassChart(sensorValue, selectedSensor, svgRef, sensorColor);
    }
  }, [sensorData, selectedSensor]);

  const handleChange = (sensorName) => {
    setSelectedSensor(sensorName);
  };

  useEffect(() => {
    isLoading ? dispatch(startLoading()) : dispatch(stopLoading());
  }, [isLoading, dispatch]);

  const isData =
    sensorData && Object.values(sensorData).some((value) => value !== null);

  return (
    <ChartUI
      selectedSensor={selectedSensor}
      sensors={sensorData}
      colors={colors}
      isDesktop={isDesktop}
      onChange={handleChange}
      svgRef={svgRef}
      isData={isData}
    />
  );
};

export default ChartContainer;

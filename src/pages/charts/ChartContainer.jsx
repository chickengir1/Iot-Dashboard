import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { generatePath } from "react-router-dom";
import ChartUI from "./ChartUI";
import { drawCompassChart } from "@services/chartConfig";
import { breakpoints } from "@utils/commonUtils";
import { useAuth } from "@error/authError";
import useFetchData from "@hooks/useFetchData";
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
    generatePath(API_PATHS.DEVICESDETAIL, { deviceId: deviceId })
  );

  const [selectedSensor, setSelectedSensor] = useState("조도");
  const [sensorData, setSensorData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(0);

  const svgRef = useRef();
  const svgRefs = useRef({
    조도: useRef(),
    온도: useRef(),
    습도: useRef(),
    토양수분: useRef(),
  }).current;

  const isDesktop = useMediaQuery(breakpoints.mainContent);

  const fetchData = useCallback(async () => {
    try {
      if (deviceList?.data) {
        const data = deviceList.data.sensor;

        setSensorData({
          조도: data?.lux ?? null,
          온도: data?.temperature ?? null,
          습도: data?.humid ?? null,
          토양수분: data?.solid ?? null,
        });
        setLastUpdated(new Date().toLocaleString("ko-KR"));
      }
    } catch (error) {
      console.error(error.cause);
    }
  }, [deviceList]);

  useEffect(() => {
    if (sensorData) {
      Object.keys(sensorData).forEach((key) => {
        if (sensorData[key] !== null && svgRefs[key]) {
          drawCompassChart(sensorData[key], key, svgRefs[key], colors[key]);
        }
      });
    }
  }, [sensorData, svgRefs]);

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 60000);
    setLastUpdated(new Date().toLocaleString("ko-KR"));
    return () => clearInterval(intervalId);
  }, [fetchData]);

  useEffect(() => {
    if (sensorData && sensorData[selectedSensor] !== null) {
      const sensorValue = sensorData[selectedSensor];
      const sensorColor = colors[selectedSensor];
      drawCompassChart(sensorValue, selectedSensor, svgRef, sensorColor);
    }
  }, [sensorData, selectedSensor]);

  useEffect(() => {
    isLoading ? dispatch(startLoading()) : dispatch(stopLoading());
  }, [isLoading, dispatch]);

  const isData =
    sensorData && Object.values(sensorData).some((value) => value !== null);

  const handleChange = (sensorName) => {
    setSelectedSensor(sensorName);
  };

  return (
    <ChartUI
      selectedSensor={selectedSensor}
      sensors={sensorData}
      colors={colors}
      isDesktop={isDesktop}
      onChange={handleChange}
      svgRef={svgRef}
      svgRefs={svgRefs}
      isData={isData}
      lastUpdated={lastUpdated}
      onRefresh={fetchData}
    />
  );
};

export default ChartContainer;

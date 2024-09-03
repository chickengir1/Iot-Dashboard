import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generatePath } from "react-router-dom";
import ChartUI from "@pages/charts/ChartUi";
import { useAuth } from "@error/authError";
import useFetchData from "@hooks/useFetchData";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";
import { API_PATHS } from "@utils/apiMap";
import useSensorData from "@hooks/useSensorData";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "@utils/commonUtils";

const ChartContainer = () => {
  useAuth();

  const deviceId = useSelector((state) => state.device.deviceIds);
  const dispatch = useDispatch();

  const { deviceList, isLoading } = useFetchData(
    generatePath(API_PATHS.DEVICESDETAIL, { deviceId })
  );

  const [selectedSensor, setSelectedSensor] = useState("조도");
  const [lastUpdated, setLastUpdated] = useState(null);

  const svgRef = useRef();
  const svgRefs = useRef({
    조도: useRef(),
    온도: useRef(),
    습도: useRef(),
    토양수분: useRef(),
  }).current;

  const isDesktop = useMediaQuery(breakpoints.sensorContent);
  const { sensorData, fetchData, isData } = useSensorData(
    deviceList,
    setLastUpdated
  );

  useEffect(() => {
    fetchData();
    const intervalId = setInterval(fetchData, 60000);
    return () => clearInterval(intervalId);
  }, [fetchData]);

  useEffect(() => {
    if (isLoading) {
      dispatch(startLoading());
    } else {
      dispatch(stopLoading());
    }
  }, [isLoading, dispatch]);

  const handleChange = (sensorName) => {
    setSelectedSensor(sensorName);
  };

  return (
    <ChartUI
      selectedSensor={selectedSensor}
      sensors={sensorData}
      svgRef={svgRef}
      svgRefs={svgRefs}
      isData={isData}
      lastUpdated={lastUpdated}
      onRefresh={fetchData}
      onChange={handleChange}
      isDesktop={isDesktop}
    />
  );
};

export default ChartContainer;

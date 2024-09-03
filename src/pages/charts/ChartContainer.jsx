import React, { useState, useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { generatePath } from "react-router-dom";
import ChartUI from "@pages/charts/ChartUi";
import { breakpoints } from "@utils/commonUtils";
import { useAuth } from "@error/authError";
import useFetchData from "@hooks/useFetchData";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";
import { API_PATHS } from "@utils/apiMap";
import useChartData from "@hooks/useChartData"; // 커스텀 훅 import

const ChartContainer = () => {
  useAuth();

  const deviceId = useSelector((state) => state.device.deviceIds);
  const dispatch = useDispatch();

  const { deviceList, isLoading } = useFetchData(
    generatePath(API_PATHS.DEVICESDETAIL, { deviceId })
  );

  const [selectedSensor, setSelectedSensor] = useState("조도");
  const [sensorData, setSensorData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const svgRef = useRef();
  const svgRefs = useRef({
    조도: useRef(),
    온도: useRef(),
    습도: useRef(),
    토양수분: useRef(),
  }).current;

  const isDesktop = useMediaQuery(breakpoints.mainContent);

  const fetchData = useCallback(() => {
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
  }, [deviceList]);

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

  const isData =
    sensorData && Object.values(sensorData).some((value) => value !== null);

  const chart = useChartData(
    sensorData,
    selectedSensor,
    svgRef,
    svgRefs,
    isDesktop,
    isData
  );

  return (
    <ChartUI
      selectedSensor={selectedSensor}
      sensors={sensorData}
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

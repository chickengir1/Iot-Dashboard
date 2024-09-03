import React, { useState, useEffect, useRef, useCallback } from "react";
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
import { Box, Typography } from "@mui/material";

const NotFound = () => (
  <Box sx={{ textAlign: "center", marginTop: "40px" }}>
    <Typography variant="h4" gutterBottom color="error">
      센서 데이터를 찾을 수 없습니다
    </Typography>
    <Typography variant="body1" gutterBottom>
      연결된 센서 데이터가 없거나 오류가 발생했습니다. 나중에 다시 시도해주세요.
    </Typography>
  </Box>
);

const ChartContainer = () => {
  useAuth();

  const deviceId = useSelector((state) => state.device.deviceIds);
  const dispatch = useDispatch();

  const [selectedSensor, setSelectedSensor] = useState("조도");
  const [lastUpdated, setLastUpdated] = useState(null);

  const { deviceList } = useFetchData(
    generatePath(API_PATHS.DEVICESDETAIL, { deviceId })
  );

  const { sensorData, fetchData, isData } = useSensorData(
    deviceList,
    setLastUpdated
  );

  const svgRef = useRef();
  const svgRefs = useRef({
    조도: useRef(),
    온도: useRef(),
    습도: useRef(),
    토양수분: useRef(),
  }).current;

  const isDesktop = useMediaQuery(breakpoints.sensorContent);

  const fetchCallBack = useCallback(() => {
    dispatch(startLoading());
    fetchData();
    dispatch(stopLoading());
  }, [fetchData, dispatch]);

  useEffect(() => {
    fetchCallBack();

    const intervalId = setInterval(fetchCallBack, 60000);
    return () => clearInterval(intervalId);
  }, [fetchCallBack]);

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
      onRefresh={fetchCallBack}
      onChange={handleChange}
      isDesktop={isDesktop}
      NotFound={NotFound}
    />
  );
};

export default ChartContainer;

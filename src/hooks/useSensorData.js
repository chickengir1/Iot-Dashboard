import { useState, useCallback } from "react";

const useSensorData = (deviceList, setLastUpdated) => {
  const [sensorData, setSensorData] = useState(null);

  const updateSensorData = useCallback(
    (data) => {
      setSensorData({
        조도: data?.lux ?? null,
        온도: data?.temperature ?? null,
        습도: data?.humid ?? null,
        토양수분: data?.solid ?? null,
      });
      setLastUpdated(new Date().toLocaleString("ko-KR"));
    },
    [setLastUpdated]
  );

  const fetchData = useCallback(() => {
    const data = deviceList?.data?.sensor;
    if (data) {
      updateSensorData(data);
    }
  }, [deviceList, updateSensorData]);

  const isData =
    sensorData && Object.values(sensorData).some((value) => value !== null);

  return { sensorData, fetchData, isData };
};

export default useSensorData;

import { useState, useCallback } from "react";

const useSensorData = (deviceList, setLastUpdated) => {
  const [sensorData, setSensorData] = useState(null);

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
  }, [deviceList, setLastUpdated]);

  const isData =
    sensorData && Object.values(sensorData).some((value) => value !== null);

  return { sensorData, fetchData, isData };
};

export default useSensorData;

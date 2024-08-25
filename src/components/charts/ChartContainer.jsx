import React from "react";
import ChartsUi from "./ChartsUi";

const ChartContainer = () => {
  const farmData = {
    name: "빅토리 농장",
    description: "Victory Farm",
    userEmail: "user@example.com",
    deviceId: 1,
    sensors: {
      조도: 85,
      습도: 45,
      온도: 22,
      토양수분: 22,
    },
  };

  const sensorColors = {
    조도: "#FF6384",
    습도: "#36A2EB",
    온도: "#FFCE56",
    토양수분: "#4BC0C0",
  };

  return <ChartsUi farmData={farmData} sensorColors={sensorColors} />;
};

export default ChartContainer;

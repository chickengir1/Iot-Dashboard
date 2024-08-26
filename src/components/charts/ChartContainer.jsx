import React, { useState, useEffect, useRef } from "react";
import ChartUI from "./ChartUI";
import { drawCompassChart } from "@services/chartConfig";

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
  const [selectedSensor, setSelectedSensor] = useState("조도");

  const svgRef = useRef();
  const sensorValue = device.sensors[selectedSensor];
  const sensorColor = colors[selectedSensor];

  useEffect(() => {
    drawCompassChart(sensorValue, selectedSensor, svgRef, sensorColor);
  }, [sensorValue, sensorColor, selectedSensor]);

  const handleChange = (sensorName) => {
    setSelectedSensor(sensorName);
  };

  return (
    <ChartUI
      selectedSensor={selectedSensor}
      sensorValue={sensorValue}
      sensorColor={sensorColor}
      device={device}
      colors={colors}
      onChange={handleChange}
      svgRef={svgRef}
    />
  );
};

export default ChartContainer;

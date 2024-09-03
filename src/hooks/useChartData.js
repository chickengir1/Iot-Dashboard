import { useEffect, useMemo } from "react";
import { drawCompassChart } from "@services/chartConfig";

const useChartData = (
  sensors,
  selectedSensor,
  svgRef,
  svgRefs,
  isDesktop,
  isData
) => {
  const colors = useMemo(
    () => ({
      조도: "#FF6384",
      습도: "#36A2EB",
      온도: "#FFCE56",
      토양수분: "#4BC0C0",
    }),
    []
  );

  useEffect(() => {
    if (isData) {
      if (isDesktop) {
        Object.keys(sensors).forEach((sensor) => {
          if (sensors[sensor] !== null) {
            drawCompassChart(
              sensors[sensor],
              sensor,
              svgRefs[sensor],
              colors[sensor]
            );
          }
        });
      } else if (sensors[selectedSensor] !== null) {
        drawCompassChart(
          sensors[selectedSensor],
          selectedSensor,
          svgRef,
          colors[selectedSensor]
        );
      }
    }
  }, [isDesktop, sensors, selectedSensor, svgRef, svgRefs, isData, colors]);

  return { colors };
};

export default useChartData;

import { useEffect, useMemo, useCallback } from "react";
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

  const drawChart = useCallback(
    (sensor, svgElement) => {
      if (sensors[sensor] !== null) {
        drawCompassChart(sensors[sensor], sensor, svgElement, colors[sensor]);
      }
    },
    [colors, sensors]
  );

  useEffect(() => {
    if (!isData) return;

    if (isDesktop) {
      Object.keys(sensors).forEach((sensor) => {
        drawChart(sensor, svgRefs[sensor]);
      });
    } else {
      drawChart(selectedSensor, svgRef);
    }
  }, [isDesktop, sensors, selectedSensor, svgRef, svgRefs, isData, drawChart]);

  return { colors };
};

export default useChartData;

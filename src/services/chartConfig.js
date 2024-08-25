export const chartConfig = (sensorName, sensorValue, color) => ({
  labels: [sensorName],
  datasets: [
    {
      data: [sensorValue, 100 - sensorValue],
      backgroundColor: [color, "#E0E0E0"],
      hoverBackgroundColor: [color, "#E0E0E0"],
    },
  ],
});

export const chartOptions = {
  rotation: -90,
  circumference: 180,
  responsive: true,
  plugins: {
    legend: {
      display: true,
    },
  },
};

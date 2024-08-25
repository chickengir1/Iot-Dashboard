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
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: "bottom",
      labels: {
        generateLabels: function (chart) {
          const dataset = chart.data.datasets[0];
          const label = chart.data.labels[0];
          const value = dataset.data[0];
          return [
            {
              text: `${label}: ${value}%`,
              fillStyle: dataset.backgroundColor[0],
              strokeStyle: dataset.backgroundColor[0],
            },
          ];
        },
      },
    },
  },
};

import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Box, Typography, Grid, Slider } from "@mui/material";
import { chartConfig, chartOptions } from "@services/chartConfig";
import { MainLayout, DesktopLayout, ServeContent } from "@styles/index";
import SidebarContainer from "@components/sidebar/SidebarContainer";
import UserCard from "@components/usercard/UserCardContainer";

ChartJS.register(ArcElement, Tooltip, Legend);

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column",
    padding: 2,
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
  },
  sensorBox: {
    width: "150px",
    margin: "20px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  sliderGroup: {
    padding: 1,
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  sliderRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  sliderLabel: {
    width: "70px",
  },
  slider: {
    width: "150px",
  },
};

const sensorControls = [
  { name: "조도", color: "#FF6384", min: 0, max: 100 },
  { name: "습도", color: "#36A2EB", min: 0, max: 100 },
  { name: "온도", color: "#FFCE56", min: -10, max: 50 },
  { name: "토양수분", color: "#4BC0C0", min: 0, max: 100 },
];

const Controller = ({ sensorValues, setSensorValues }) => {
  const handleSliderChange = (name, newValue) => {
    setSensorValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };

  return (
    <Box sx={styles.sliderGroup}>
      <Grid container spacing={2}>
        {sensorControls.map((control) => (
          <Grid item xs={6} key={control.name}>
            <Box sx={styles.sliderRow}>
              <Typography
                variant="body2"
                textAlign="center"
                sx={{ ...styles.sliderLabel, color: control.color }}
              >
                {control.name}
              </Typography>
              <Slider
                value={sensorValues[control.name]}
                min={control.min}
                max={control.max}
                step={1}
                valueLabelDisplay="auto"
                sx={{ color: control.color }}
                onChange={(e, newValue) =>
                  handleSliderChange(control.name, newValue)
                }
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const SensorDoughnut = ({ sensorName, sensorValue, color }) => {
  const data = chartConfig(sensorName, sensorValue, color);
  const options = chartOptions;

  return (
    <Box sx={styles.sensorBox}>
      <Doughnut data={data} options={options} />
      <Typography variant="body1" align="center">
        {sensorValue}%
      </Typography>
    </Box>
  );
};

const ChartsUi = ({ farmData, sensorColors }) => {
  const [sensorValues, setSensorValues] = useState(farmData.sensors);

  return (
    <DesktopLayout>
      <SidebarContainer />
      <MainLayout>
        <UserCard />
        <Box sx={styles.layout}>
          <Typography variant="h6">{farmData.name}</Typography>
          <Typography variant="subtitle1">{farmData.description}</Typography>
          <Grid container spacing={2}>
            {Object.keys(sensorValues).map((sensor) => (
              <Grid
                item
                xs={6}
                md={6}
                key={sensor}
                display="flex"
                justifyContent="center"
              >
                <SensorDoughnut
                  sensorName={sensor}
                  sensorValue={sensorValues[sensor]}
                  color={sensorColors[sensor]}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Controller
          sensorValues={sensorValues}
          setSensorValues={setSensorValues}
        />
      </MainLayout>
      <ServeContent />
    </DesktopLayout>
  );
};

export default ChartsUi;

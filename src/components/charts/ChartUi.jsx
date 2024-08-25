import React from "react";
import Typography from "@mui/material/Typography";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@mui/material";
import { DesktopLayout, MainLayout } from "@styles/index";
import { chartConfig, chartOptions } from "@services/chartConfig";
import Sidebar from "@components/sidebar/SidebarContainer";
import UserCard from "@components/usercard/UserCardContainer";
import { BlueRoundedButton } from "@styles/index";
import { ServeContent } from "@styles/index";

const styles = {
  button: {
    width: "100px",
    marginBottom: "16px",
  },
  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: 8,
    marginTop: "24px",
  },
  charts: {
    height: "200px",
    maxWidth: "200px",
    margin: "0 auto",
    borderRadius: "50%",
  },
};

const ButtonGroup = ({ sensors, onChange }) => (
  <Box sx={styles.buttonGroup}>
    {Object.keys(sensors).map((name) => (
      <BlueRoundedButton
        key={name}
        variant="contained"
        onClick={() => onChange(name)}
        sx={styles.button}
      >
        {name}
      </BlueRoundedButton>
    ))}
  </Box>
);

const ChartUI = ({
  selectedSensor,
  device,
  onChange,
  sensorValue,
  sensorColor,
}) => {
  return (
    <DesktopLayout>
      <Sidebar />
      <MainLayout>
        <UserCard />
        <Typography variant="h6" gutterBottom>
          {device.name}의 현재 정보
        </Typography>
        <Box sx={styles.charts}>
          <Doughnut
            data={chartConfig(selectedSensor, sensorValue, sensorColor)}
            options={chartOptions}
          />
        </Box>
        <ButtonGroup sensors={device.sensors} onChange={onChange} />
      </MainLayout>
      <ServeContent />
    </DesktopLayout>
  );
};

export default ChartUI;

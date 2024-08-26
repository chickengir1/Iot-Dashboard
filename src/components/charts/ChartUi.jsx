import React from "react";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { DesktopLayout, MainLayout } from "@styles/index";
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
    height: "260px",
    maxWidth: "260px",
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

const ChartUI = ({ selectedSensor, device, onChange, sensorValue, svgRef }) => {
  return (
    <DesktopLayout>
      <Sidebar />
      <MainLayout>
        <UserCard />
        <Typography variant="h6" gutterBottom>
          {device.name}의 현재 정보
        </Typography>
        <Typography variant="body1">
          현재 선택된 센서: {selectedSensor} ({sensorValue})
        </Typography>
        <Box sx={styles.charts}>
          <svg ref={svgRef}></svg>
        </Box>
        <ButtonGroup sensors={device.sensors} onChange={onChange} />
      </MainLayout>
      <ServeContent />
    </DesktopLayout>
  );
};

export default ChartUI;

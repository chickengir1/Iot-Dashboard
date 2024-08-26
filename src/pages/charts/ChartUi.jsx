import React from "react";
import Typography from "@mui/material/Typography";
import { Box, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import Sidebar from "@components/sidebar/SidebarContainer";
import UserCard from "@components/usercard/UserCardContainer";
import { ServeContent } from "@styles/index";
import { mainContentConfig } from "@styles/layoutConfig";

const styles = {
  select: {
    width: "150px",
    marginBottom: "16px",
    marginTop: "24px",
  },
  charts: {
    height: "260px",
    maxWidth: "260px",
    margin: "0 auto",
    borderRadius: "50%",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
};

const Selector = ({ sensors, selectedSensor, onChange }) => (
  <FormControl sx={styles.select}>
    <InputLabel id="sensor-select-label">센서 선택</InputLabel>
    <Select
      labelId="sensor-select-label"
      value={selectedSensor}
      label="센서 선택"
      onChange={(event) => onChange(event.target.value)}
    >
      {Object.keys(sensors).map((name) => (
        <MenuItem key={name} value={name}>
          {name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

const ChartUI = ({ device, onChange, svgRef, isDesktop, selectedSensor }) => {
  const { Layout, MainLayout } = mainContentConfig(isDesktop);

  return (
    <Layout>
      <Sidebar />
      <MainLayout>
        <UserCard />
        <Box sx={styles.title}>
          <Typography variant="h6" gutterBottom>
            {device.name}
          </Typography>
          <Selector
            sensors={device.sensors}
            selectedSensor={selectedSensor}
            onChange={onChange}
          />
        </Box>
        <Box sx={styles.charts}>
          <svg ref={svgRef}></svg>
        </Box>
      </MainLayout>
      {isDesktop && <ServeContent />}
    </Layout>
  );
};

export default ChartUI;

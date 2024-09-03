import React from "react";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Refresh } from "@mui/icons-material";
import Sidebar from "@components/sidebar/SidebarContainer";
import UserCard from "@components/usercard/UserCardContainer";
import { mainContentConfig } from "@styles/layoutConfig";
import useChartData from "@hooks/useChartData";
import useSensorControl from "@hooks/useSensorControl";

const styles = {
  chartHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
};

const ChartHeader = ({ lastUpdated, onRefresh }) => (
  <Box sx={styles.chartHeader}>
    <Typography variant="subtitle1">센서 데이터 - {lastUpdated}</Typography>
    <IconButton onClick={onRefresh}>
      <Refresh />
    </IconButton>
  </Box>
);

const DesktopCharts = ({ svgRefs }) => (
  <Grid container>
    {Object.keys(svgRefs).map((sensor) => (
      <Grid key={sensor} sx={{ margin: "0 auto", mb: 6 }}>
        <svg ref={svgRefs[sensor]}></svg>
      </Grid>
    ))}
  </Grid>
);

const MobileCharts = ({ sensors, selectedSensor, svgRef, onChange }) => (
  <>
    <FormControl sx={{ margin: 2, minWidth: 120, width: "100%" }}>
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
    <Box sx={styles.chartHeader}>
      <svg ref={svgRef}></svg>
    </Box>
  </>
);

const ChartUI = ({
  sensors,
  svgRef,
  svgRefs,
  selectedSensor,
  isData,
  lastUpdated,
  onRefresh,
  isDesktop,
  onChange,
}) => {
  useChartData(sensors, selectedSensor, svgRef, svgRefs, isDesktop, isData);

  const SensorButtonGroup = useSensorControl();
  const { Layout, MainLayout } = mainContentConfig(isDesktop);

  return (
    <Layout>
      <Sidebar />
      <MainLayout>
        <UserCard />
        <Box>
          <ChartHeader lastUpdated={lastUpdated} onRefresh={onRefresh} />
          {isDesktop ? (
            <DesktopCharts svgRefs={svgRefs} />
          ) : (
            <MobileCharts
              sensors={sensors}
              selectedSensor={selectedSensor}
              svgRef={svgRef}
              onChange={onChange}
            />
          )}
          <SensorButtonGroup />
        </Box>
      </MainLayout>
    </Layout>
  );
};

export default ChartUI;

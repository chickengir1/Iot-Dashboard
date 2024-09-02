import React from "react";
import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
  IconButton,
} from "@mui/material";
import { Refresh } from "@mui/icons-material";
import SensorButton from "@components/sensorButton/SensorButtonContainer";
import Sidebar from "@components/sidebar/SidebarContainer";
import UserCard from "@components/usercard/UserCardContainer";
import { mainContentConfig } from "@styles/layoutConfig";

const styles = {
  select: {
    width: "100%",
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
  buttonLabel: {
    mb: 2,
    padding: "8px 10px",
    fontWeight: "bold",
    borderRadius: 2,
    backgroundColor: "#fff",
    boxShadow: 1,
  },
  chartHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chartGrid: {
    justifyContent: "center",
  },
  buttonBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const datas = [
  { action: "led", label: "빛 조절" },
  { action: "motor", label: "온도 조절" },
  { action: "pump", label: "물 주기" },
];

const NotFound = () => (
  <Box sx={{ textAlign: "center", marginTop: "40px" }}>
    <Typography variant="h4" gutterBottom color="error">
      센서 데이터를 찾을 수 없습니다
    </Typography>
    <Typography variant="body1" gutterBottom>
      연결된 센서 데이터가 없거나 오류가 발생했습니다. 나중에 다시 시도해주세요.
    </Typography>
  </Box>
);

const SensorButtonGroup = () => (
  <Box>
    <Typography variant="body1" textAlign={"center"} sx={{ mb: 4 }}>
      버튼 조작
    </Typography>
    <Grid container sx={styles.chartGrid}>
      {datas.map((data) => (
        <Grid item xs={4} sm={4} md={4} lg={2.4} key={data.label}>
          <Box sx={styles.buttonBox}>
            <Typography sx={styles.buttonLabel}>{data.label}</Typography>
            <SensorButton action={data.action} />
          </Box>
        </Grid>
      ))}
    </Grid>
  </Box>
);

const ChartUI = ({
  sensors,
  onChange,
  svgRef,
  svgRefs,
  isDesktop,
  selectedSensor,
  isData,
  lastUpdated,
  onRefresh,
}) => {
  const { Layout, MainLayout } = mainContentConfig(isDesktop);

  return (
    <Layout>
      <Sidebar />
      <MainLayout>
        <UserCard />
        {isData ? (
          <Box>
            {isDesktop && (
              <Box sx={styles.chartHeader}>
                <Typography variant="subtitle1">
                  센서 데이터- {lastUpdated}
                </Typography>
                <IconButton onClick={onRefresh}>
                  <Refresh />
                </IconButton>
              </Box>
            )}
            <Grid container sx={styles.chartGrid}>
              {isDesktop ? (
                Object.keys(svgRefs).map((sensor) => (
                  <Grid item xs={6} md={3} key={sensor}>
                    <svg ref={svgRefs[sensor]}></svg>
                  </Grid>
                ))
              ) : (
                <Box>
                  <Box sx={styles.chartHeader}>
                    <Typography variant="subtitle1">{lastUpdated}</Typography>
                    <IconButton onClick={onRefresh}>
                      <Refresh />
                    </IconButton>
                  </Box>
                  <FormControl
                    sx={styles.select}
                    disabled={!sensors || Object.keys(sensors).length === 0}
                  >
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
                  <Box sx={styles.charts}>
                    <svg ref={svgRef}></svg>
                  </Box>
                </Box>
              )}
            </Grid>
            <SensorButtonGroup />
          </Box>
        ) : (
          <NotFound />
        )}
      </MainLayout>
    </Layout>
  );
};

export default ChartUI;

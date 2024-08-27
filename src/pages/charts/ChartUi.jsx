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
const NotFound = () => {
  return (
    <Box sx={{ textAlign: "center", marginTop: "40px" }}>
      <Box sx={{ marginBottom: "20px" }}>
        <img
          src="/logo/NotFound.webp"
          alt="No Data"
          style={{ maxWidth: "300px", width: "100%" }}
        />
      </Box>
      <Typography variant="h4" gutterBottom color="error">
        센서 데이터를 찾을 수 없습니다
      </Typography>
      <Typography variant="body1" gutterBottom>
        연결된 센서 데이터가 없거나 오류가 발생했습니다. 나중에 다시
        시도해주세요.
      </Typography>
    </Box>
  );
};
const Selector = ({ sensors, selectedSensor, onChange }) => (
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
);

const ChartUI = ({
  sensors,
  onChange,
  svgRef,
  isDesktop,
  selectedSensor,
  isData,
}) => {
  const { Layout, MainLayout } = mainContentConfig(isDesktop);

  return (
    <Layout>
      <Sidebar />
      <MainLayout>
        <UserCard />
        {isData ? (
          <Box>
            <Box sx={styles.title}>
              <Typography variant="h6" gutterBottom>
                센서 데이터
              </Typography>
              <Typography variant="subtitle1" gutterBottom>
                {sensors.time}
              </Typography>

              <Selector
                sensors={sensors}
                selectedSensor={selectedSensor}
                onChange={onChange}
              />
            </Box>
            <Box sx={styles.charts}>
              <svg ref={svgRef}></svg>
            </Box>
          </Box>
        ) : (
          <NotFound />
        )}
      </MainLayout>
      {isDesktop && <ServeContent />}
    </Layout>
  );
};

export default ChartUI;

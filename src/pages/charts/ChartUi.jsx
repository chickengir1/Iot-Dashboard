import {
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";
import Sidebar from "@components/sidebar/SidebarContainer";
import UserCard from "@components/usercard/UserCardContainer";
import { ServeContent } from "@styles/index";
import { mainContentConfig } from "@styles/layoutConfig";
import SensorButton from "@components/sensorButton/SensorButtonContainer";

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

const datas = [
  { action: "led", label: "빛 조절" }, //불 키고 끄기
  { action: "motor", label: "온도 조절" }, //온도 조절
  //디바이스에서 추가되는 대로 추가
  // { action: "/", label: "습도 조절" }, //습도 조절
  // { action: "/", label: "물 주기" }, //물 주기
  // { action: "/", label: "비료 주기" }, //비료 주기
];

const ButtonGroup = () => {
  return (
    <Box sx={{ justifyContent: "center" }}>
      <Box sx={styles.title}>
        <Typography variant="h6" gutterBottom>
          센서 조작 버튼
        </Typography>
      </Box>
      <Grid container sx={{ justifyContent: "center" }}>
        {datas.map((data) => (
          <Grid item xs={4} sm={4} md={4} lg={2.4} key={data.label}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  mb: 2,
                  padding: "8px 20px",
                  fontWeight: "bold",
                  borderRadius: 2,
                  backgroundColor: "#fff",
                  boxShadow: 1,
                }}
              >
                {data.label}
              </Typography>
              <SensorButton action={data.action} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

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
        <ButtonGroup />
      </MainLayout>
      {isDesktop && <ServeContent />}
    </Layout>
  );
};

export default ChartUI;

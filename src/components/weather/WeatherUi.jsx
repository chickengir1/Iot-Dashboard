import { FmdGood } from "@mui/icons-material";
import { Box, Typography, Card, CardContent } from "@mui/material";

const styles = {
  weatherLayout: {
    height: "20vh",
    padding: 2,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  iconStyle: {
    width: "120px",
    height: "100px",
    filter: "drop-shadow(0px 2px 8px rgba(0, 2, 4, 0.5))",
    marginBottom: "2px",
  },
  tempStyle: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#333",
  },
  weatherDescStyle: {
    fontSize: "14px",
    fontWeight: "500",
    color: "#666",
  },
  locationStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "4px",
    marginTop: "2px",
    color: "#999",
  },
  dayStyle: {
    fontSize: "12px",
    color: "#999",
    marginTop: "2px",
  },
};

const WeatherUi = ({ weatherData }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Card sx={styles.weatherLayout}>
        <CardContent sx={{ padding: "8px" }}>
          {weatherData && (
            <Box>
              <img
                src={weatherData.weatherIcon}
                alt="Weather Icon"
                style={styles.iconStyle}
              />
              <Typography sx={styles.tempStyle}>
                {weatherData.currentTemp} °C
              </Typography>
              <Typography sx={styles.weatherDescStyle}>
                {weatherData.weatherDesc}
              </Typography>
              <Typography sx={styles.dayStyle}>{weatherData.day}</Typography>
              <Box sx={styles.locationStyle}>
                <FmdGood sx={{ color: "#999", fontSize: "16px" }} />
                <Typography sx={{ fontSize: "12px" }}>
                  {weatherData.locationName}, {weatherData.country}
                </Typography>
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherUi;

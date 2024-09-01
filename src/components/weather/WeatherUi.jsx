import { FmdGood } from "@mui/icons-material";
import { Box, Typography, Card, CardContent } from "@mui/material";

const styles = {
  weatherLayout: {
    height: "20vh",
    padding: 3,
    backgroundColor: "#ffffff",
    borderRadius: 4,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  iconStyle: {
    width: "120px",
    height: "120px",
    filter: "drop-shadow(0px 2px 8px rgba(0, 2, 4, 0.5))",
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

const WeatherUi = ({ weather }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Card sx={styles.weatherLayout}>
        <CardContent sx={{ padding: "8px" }}>
          {weather && (
            <Box>
              <img
                src={weather.weatherIcon}
                alt="Weather Icon"
                style={styles.iconStyle}
              />
              <Typography sx={styles.tempStyle}>
                {weather.currentTemp} °C
              </Typography>
              <Typography sx={styles.weatherDescStyle}>
                {weather.weatherDesc}
              </Typography>
              <Typography sx={styles.dayStyle}>{weather.day}</Typography>
              <Box sx={styles.locationStyle}>
                <FmdGood sx={{ color: "#999", fontSize: "16px" }} />
                <Typography sx={{ fontSize: "12px" }}>
                  {weather.locationName}, {weather.country}
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

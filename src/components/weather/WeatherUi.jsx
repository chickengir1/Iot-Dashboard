import { FmdGood } from "@mui/icons-material";
import { Box, Typography, Card, CardContent, Divider } from "@mui/material";

const styles = {
  weatherLayout: {
    mt: 2,
    minHeight: "20vh",
    paddingX: 4,
    background: "linear-gradient(60deg, #84D3FF 0%,#05159E 120%)",
    borderRadius: 2,
    color: "#fff",
  },
  weatherInnerStyle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
};

const WeatherUi = ({ weatherData }) => {
  return (
    <Box sx={{ mb: 2, minHeight: "20vh" }}>
      <Card sx={styles.weatherLayout}>
        <CardContent>
          {weatherData && (
            <Box sx={styles.weatherInnerStyle}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <img
                  src={weatherData.weatherIcon}
                  alt="Weather Icon"
                  style={{ width: "80px", height: "80px" }}
                />
                <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                  {weatherData.weatherDesc}
                </Typography>
              </Box>

              <Divider orientation="vertical" variant="middle" flexItem />

              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography>{weatherData.day}</Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  {weatherData.currentTemp}°
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 1,
                  }}
                >
                  <FmdGood />
                  <Typography>
                    {weatherData.locationName}, {weatherData.country}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherUi;

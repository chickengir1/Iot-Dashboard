import { Box, Typography, Card, CardContent } from "@mui/material";
import { getUserLocation } from "@services/getUserLocation";
import { weatherApi } from "@services/weatherApi";
import { extractWeatherData } from "@utils/weatherUtils";
import { useEffect, useState } from "react";

const WeatherUi = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const { latitude, longitude } = await getUserLocation();

        const weatherResponse = await weatherApi(latitude, longitude);
        // setWeatherData(weatherResponse.data);
        console.log(weatherResponse);
        setWeatherData(extractWeatherData(weatherResponse));
        console.log(weatherData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <Box sx={{ mb: 2, minHeight: "20vh" }}>
      <Card sx={{ mt: 2, minHeight: "20vh" }}>
        <CardContent>
          <Typography variant="subtitle1">날씨 위젯 ui</Typography>
          <Typography>
            {weatherData ? JSON.stringify(weatherData) : "nn"}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default WeatherUi;

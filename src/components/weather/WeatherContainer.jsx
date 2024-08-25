import WeatherUi from "./WeatherUi";
import { getUserLocation } from "@services/getUserLocation";
import { weatherApi } from "@services/weatherApi";
import { extractWeatherData } from "@utils/weatherUtils";
import { useEffect, useState } from "react";

const WeatherContainer = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const { latitude, longitude } = await getUserLocation();

        const weatherResponse = await weatherApi(latitude, longitude);
        setWeatherData(extractWeatherData(weatherResponse));
      } catch (error) {
        console.error(error);
      }
    };

    fetchLocation();
  }, []);

  return (
    <>
      <WeatherUi weatherData={weatherData} />
    </>
  );
};

export default WeatherContainer;

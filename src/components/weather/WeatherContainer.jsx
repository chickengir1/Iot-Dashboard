import WeatherUi from "./WeatherUi";
import { getUserLocation } from "@services/getUserLocation";
import { weatherApi } from "@services/weatherApi";
import { extractWeatherData } from "@utils/weatherUtils";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";

const WeatherContainer = () => {
  const [weather, setWeather] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchLocation = async () => {
      dispatch(startLoading());
      try {
        const { latitude, longitude } = await getUserLocation();

        const weatherResponse = await weatherApi(latitude, longitude);
        setWeather(extractWeatherData(weatherResponse));
      } catch (error) {
        console.error(error);
      } finally {
        dispatch(stopLoading());
      }
    };

    fetchLocation();
  }, [dispatch]);

  return <WeatherUi weather={weather} />;
};

export default WeatherContainer;

import axios from "axios";

export const weatherApi = async (latitude, longitude) => {
  try {
    const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

    const weatherResponse = await axios.get(
      "https://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: latitude,
          lon: longitude,
          appid: apiKey,
          units: "metric",
        },
      }
    );

    return weatherResponse.data;
  } catch (error) {
    console.error(error);
  }
};

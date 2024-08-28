import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        setData(response.data);
      } catch (error) {
        console.error(error);
        throw error;
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { deviceList: data, isLoading };
};

export default useFetchData;

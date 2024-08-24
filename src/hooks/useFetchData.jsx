import { useState, useEffect } from "react";
import axios from "axios";

const useFetchData = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        setData(response.data);
      } catch (error) {
        console.error(error);
        throw error;
      }
    };

    fetchData();
  }, [url]);

  // 데이터 키 여기서 부여한건 내 실수
  return { deviceList: data };
};

export default useFetchData;

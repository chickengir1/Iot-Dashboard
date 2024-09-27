import { useState } from "react";
import axios from "axios";

const usePutRequest = (url) => {
  const [data, setData] = useState(null);

  const putData = async (putData) => {
    try {
      const response = await axios.put(url, putData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(response.data);
      return response.data;
    } catch (error) {
      console.error(error.cause);
      throw error;
    }
  };

  return { data, putData };
};

export default usePutRequest;

import { useState } from "react";
import axios from "axios";

const usePostRequest = (url) => {
  const [data, setData] = useState(null);

  const postData = async (postData) => {
    try {
      const response = await axios.post(url, postData, {
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

  return { data, postData };
};

export default usePostRequest;

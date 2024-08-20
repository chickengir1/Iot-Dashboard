import { useState } from "react";
import axios from "axios";

const usePostRequest = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const postData = async (postData) => {
    setLoading(true);

    try {
      const response = await axios.post(url, postData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setData(response.data);
      return response.data;
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, postData };
};

export default usePostRequest;

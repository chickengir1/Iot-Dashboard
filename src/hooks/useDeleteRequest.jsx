import { useState } from "react";
import axios from "axios";

const useDeleteRequest = (url) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  const deleteData = async () => {
    setLoading(true);

    try {
      const response = await axios.delete(url, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setData(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { loading, data, deleteData };
};

export default useDeleteRequest;

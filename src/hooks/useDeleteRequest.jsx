import { useState } from "react";
import axios from "axios";

const useDeleteRequest = (url) => {
  const [data, setData] = useState(null);

  const deleteData = async () => {
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
    }
  };

  return { data, deleteData };
};

export default useDeleteRequest;

import { useState, useEffect } from "react";
import axios from "axios";
import { startLoading, stopLoading } from "@redux/actions/loadingActions";
import { useDispatch } from "react-redux";

const useFetchData = (url) => {
  const [data, setData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(startLoading());
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
      } finally {
        dispatch(stopLoading());
      }
    };

    fetchData();
  }, [dispatch, url]);

  // 데이터 키 여기서 부여한건 내 실수
  return { deviceList: data };
};

export default useFetchData;

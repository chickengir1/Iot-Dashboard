import { useState, useEffect } from "react";
import axios from "axios";

// 이메일 파라미터로 넣고 로그인 포스트 요청 보낼때 세션에 이메일 정보 저장하니까
//  그거 토대로 가져와서 페치 요청 보낼때 넣어서 던져주면 디바이스 스키마에서 유저 이메일 레퍼런스 중인 디바이스 가져올 수 있음

const useFetchData = (url, userEmail) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (err) {
        throw new Error(`${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, userEmail]);

  return { data, loading };
};

export default useFetchData;

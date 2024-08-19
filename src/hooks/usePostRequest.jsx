import { useState } from "react";
import axios from "axios";

// 로딩 관련 처리는 나중에 공용으로 빼고 서버 응답 메세지 및 에러 메세지는 500번일때 에러 바운더리에 위임 클라이언트측 에러일때 노티피케이션 만들어서 위임

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

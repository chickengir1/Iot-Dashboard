export const getResponseMessage = (response, error) => {
  if (response && typeof response === "object" && response.message) {
    return response.message;
  }

  if (
    error &&
    error.response &&
    error.response.data &&
    typeof error.response.data === "object"
  ) {
    return error.response.data.error;
  }

  return null;
};

// 서버 에러 메세지 및 클라이언트 에러 메세지 리턴하는 공통 유틸 함수
// 유틸보다는 에러 폴더에 있는게 맞는 것 같아서 이쪽으로 뺐음

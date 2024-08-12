import React from "react";

const Homepage = () => {
  throw new Error("This is a forced error for testing the ErrorBoundary.");
  // 에러 바운더리 테스트용 나중에 지워주세요

  return <div>Welcome to the Homepage</div>;
};

export default Homepage;

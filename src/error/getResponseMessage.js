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
    return error.response.data.message;
  }

  return null;
};

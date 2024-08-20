export const NAVIGATE = "NAVIGATE";

export const navigateTo = (route) => {
  return {
    type: NAVIGATE,
    payload: route,
  };
};

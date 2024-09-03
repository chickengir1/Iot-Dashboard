export const getEmail = (email) => email.split("@")[0];

export const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const breakpoints = {
  Account: "(min-width: 600px)",
  mainContent: "(min-width: 1280px)",
  sensorContent: "(min-width: 1000px)",
};

export const getEmail = (email) => email.split("@")[0];

export const delay = (ms) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

export const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => {
          console.error(error);
          reject(error);
        }
      );
    } else {
      console.error("이 브라우저에서 geolocation이 지원되지 않습니다.");
    }
  });
};

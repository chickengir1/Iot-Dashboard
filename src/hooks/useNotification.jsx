import { useState } from "react";

const useNotification = () => {
  const [notification, setNotification] = useState({
    message: null,
    type: "",
    open: false,
  });

  return {
    notification: notification,
    setNotification: setNotification,
  };
};

export default useNotification;

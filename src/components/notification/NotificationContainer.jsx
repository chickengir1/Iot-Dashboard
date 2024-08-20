import React from "react";
import NotificationUi from "./NotificationUi";

const NotificationContainer = ({ notification, setNotification }) => {
  const handleClose = () => {
    setNotification((prev) => ({ ...prev, open: false }));
  };

  return (
    <NotificationUi
      message={notification.message}
      type={notification.type}
      open={notification.open}
      handleClose={handleClose}
    />
  );
};

export default NotificationContainer;

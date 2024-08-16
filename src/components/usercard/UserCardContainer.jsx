import React from "react";
import UserCardUi from "./UserCardUi";
import { useSelector } from "react-redux";
import {
  AccountCircle,
  Face,
  Face2,
  Face3,
  Face4,
  Face5,
  Face6,
} from "@mui/icons-material";

const UserCardContainer = () => {
  const { userId, message, iconKey, notificationCount } = useSelector(
    (state) => ({
      userId: state.profile.userId,
      message: state.profile.message,
      iconKey: state.profile.icon,
      notificationCount: state.notification.unreadCount,
    })
  );

  const iconMap = {
    profile1: <Face />,
    profile2: <Face2 />,
    profile3: <Face3 />,
    profile4: <Face4 />,
    profile5: <Face5 />,
    profile6: <Face6 />,
  };

  return (
    <UserCardUi
      userId={userId}
      message={message}
      icon={iconMap[iconKey] || <AccountCircle />}
      badgeCount={notificationCount}
    />
  );
};

export default UserCardContainer;

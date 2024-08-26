import React from "react";
import { useNavigate } from "react-router-dom";
import ListItemUi from "./ListItemUi";

const ListItemContainer = ({ title, description, icon, avatar = false }) => {
  const navigate = useNavigate();
  const handleDevices = () => {
    navigate(`/devicesinfo`);
  };

  return (
    <ListItemUi
      title={title}
      description={description}
      icon={icon}
      avatar={avatar}
      onClick={handleDevices}
    />
  );
};

export default ListItemContainer;

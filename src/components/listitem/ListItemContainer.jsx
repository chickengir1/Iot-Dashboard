import ListItemUi from "./ListItemUi";

const ListItemContainer = ({ title, description, icon, avatar = false }) => (
  <ListItemUi
    title={title}
    description={description}
    icon={icon}
    avatar={avatar}
  />
);

export default ListItemContainer;

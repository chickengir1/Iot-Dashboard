import ListItemUi from "./ListItemUi";

const ListItemContainer = ({ date, description, isFinish }) => {
  return (
    <ListItemUi date={date} description={description} isFinish={isFinish} />
  );
};

export default ListItemContainer;

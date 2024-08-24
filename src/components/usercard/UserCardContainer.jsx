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

const iconMap = {
  profile1: <Face />,
  profile2: <Face2 />,
  profile3: <Face3 />,
  profile4: <Face4 />,
  profile5: <Face5 />,
  profile6: <Face6 />,
};

const UserCardContainer = () => {
  const profile = useSelector((state) => state.profile);

  console.log(profile.userId);

  return (
    <UserCardUi
      userId={profile.userId}
      message={"Good Morning!"}
      icon={iconMap[1] || <AccountCircle />}
    />
  );
};

export default UserCardContainer;

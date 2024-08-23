import HomeUi from "./HomeUi";
import { useMediaQuery } from "@mui/material";
import { breakpoints } from "../../utils/commonUtils";
import { get, save } from "../../utils/localStorage";
import { getResponseMessage } from "../../error/getResponseMessage";

const HomeContainer = () => {
  const isDesktop = useMediaQuery(breakpoints.mainContent);
  return <HomeUi isDesktop={isDesktop} />;
};

export default HomeContainer;

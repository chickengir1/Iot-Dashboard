import { combineReducers } from "redux";
import navigateReducer from "./reducers/navigateReducer";
import profileReducer from "./reducers/profileReducer";
import notificationReducer from "./reducers/notificationReducer";

const rootReducer = combineReducers({
  navigation: navigateReducer,
  profile: profileReducer,
  notification: notificationReducer,
});

export default rootReducer;

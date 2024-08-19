import { combineReducers } from "redux";
import navigateReducer from "./reducers/navigateReducer";
import { formReducer } from "./reducers/formReducer";
import profileReducer from "./reducers/profileReducer";
import notificationReducer from "./reducers/notificationReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  navigation: navigateReducer,
  form: formReducer,
  profile: profileReducer,
  notification: notificationReducer,
  todo: todoReducer,
});

export default rootReducer;

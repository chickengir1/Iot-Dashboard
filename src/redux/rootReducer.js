import { combineReducers } from "redux";
import navigateReducer from "./reducers/navigateReducer";
import { formReducer } from "./reducers/formReducer";
import profileReducer from "./reducers/profileReducer";
import notificationReducer from "./reducers/notificationReducer";
import todoReducer from "./reducers/todoReducer";
import modalReducer from "./reducers/modalReducer";

const rootReducer = combineReducers({
  navigation: navigateReducer,
  form: formReducer,
  profile: profileReducer,
  notification: notificationReducer,
  todo: todoReducer,
  modal: modalReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import navigateReducer from "./reducers/navigateReducer";
import {
  loginReducer,
  signupReducer,
  profileUpdateReducer,
  findIdReducer,
  findPasswordReducer,
} from "./reducers/formReducer";
import profileReducer from "./reducers/profileReducer";
import notificationReducer from "./reducers/notificationReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  navigation: navigateReducer,
  login: loginReducer,
  signup: signupReducer,
  profileUpdate: profileUpdateReducer,
  findId: findIdReducer,
  findPassword: findPasswordReducer,
  profile: profileReducer,
  notification: notificationReducer,
  todo: todoReducer,
});

export default rootReducer;

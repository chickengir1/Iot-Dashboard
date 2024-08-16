import { combineReducers } from "redux";
import navigateReducer from "./reducers/navigateReducer";
import {
  loginReducer,
  signupReducer,
  profileUpdateReducer,
  findIdReducer,
  findPasswordReducer,
} from "./reducers/formReducer";

const rootReducer = combineReducers({
  navigation: navigateReducer,
  login: loginReducer,
  signup: signupReducer,
  profileUpdate: profileUpdateReducer,
  findId: findIdReducer,
  findPassword: findPasswordReducer,
});

export default rootReducer;

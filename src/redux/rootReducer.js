import { combineReducers } from "redux";
import navigateReducer from "./reducers/navigateReducer";

const rootReducer = combineReducers({
  navigation: navigateReducer,
});

export default rootReducer;

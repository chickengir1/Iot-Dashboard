import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import navigateReducer from "./reducers/navigateReducer";
import { formReducer } from "./reducers/formReducer";
import profileReducer from "./reducers/profileReducer";
import modalReducer from "./reducers/modalReducer";

const profilePersistConfig = {
  key: "profile",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  navigation: navigateReducer,
  form: formReducer,
  profile: persistReducer(profilePersistConfig, profileReducer),
  modal: modalReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import navigateReducer from "./reducers/navigateReducer";
import { formReducer } from "./reducers/formReducer";
import profileReducer from "./reducers/profileReducer";
import modalReducer from "./reducers/modalReducer";
import loadingReducer from "./reducers/loadingReducer";
import deviceReducer from "./reducers/deviceReducer";

const profilePersistConfig = {
  key: "profile",
  storage: sessionStorage,
};

const devicePersistConfig = {
  key: "device",
  storage: sessionStorage,
};

const rootReducer = combineReducers({
  navigation: navigateReducer,
  form: formReducer,
  profile: persistReducer(profilePersistConfig, profileReducer),
  modal: modalReducer,
  loading: loadingReducer,
  device: persistReducer(devicePersistConfig, deviceReducer),
});

export default rootReducer;

import { NAVIGATE } from "../actions/navigateAction";

const initialState = {
  currentRoute: "/home",
};

const navigateReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVIGATE:
      return {
        ...state,
        currentRoute: action.payload,
      };
    default:
      return state;
  }
};

export default navigateReducer;

import { NAVIGATE } from "../actions/navigateAction";

const initialState = {
  currentRoute: null,
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

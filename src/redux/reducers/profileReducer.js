import { SET_USER_INFO } from "../actions/profileActions";

const initialState = {
  userId: "",
  message: "good morning!",
  icon: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

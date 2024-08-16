import { SET_USER_INFO } from "../actions/profileActions";

const initialState = {
  userId: "유저 아이디",
  message: "good morning!",
  icon: "profile1",
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

export default profileReducer;

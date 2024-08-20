import { SET_PROFILE_DATA } from "../actions/profileActions";

const initialState = {
  userId: null,
  email: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      console.log("리턴값", action.payload);
      return {
        ...state,
        userId: action.payload.userId,
        email: action.payload.email,
        createdAt: action.payload.createdAt,
      };
    default:
      return state;
  }
};

export default profileReducer;

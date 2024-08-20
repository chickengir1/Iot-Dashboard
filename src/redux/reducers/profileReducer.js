import { SET_PROFILE_DATA } from "../actions/profileActions";

const initialState = {
  userId: null,
  email: null,
  createdAt: null,
};
// 고민 해봤는데 이메일이랑 생성시간은 필요 없을 것 같음

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      console.log("액션 호출 뒤 값", action.payload);
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

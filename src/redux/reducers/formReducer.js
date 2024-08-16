import {
  SET_LOGIN_ID,
  SET_LOGIN_PASSWORD,
  SET_SIGNUP_ID,
  SET_SIGNUP_PASSWORD,
  SET_SIGNUP_EMAIL,
  SET_SIGNUP_CONFIRM_PASSWORD,
  SET_PROFILE_UPDATE_ID,
  SET_PROFILE_UPDATE_PASSWORD,
  SET_FIND_ID_EMAIL,
  SET_FIND_PASSWORD_ID,
  SET_FIND_PASSWORD_EMAIL,
} from "../actions/formAction";

// 로그인 리듀서
const loginInitialState = {
  id: "",
  password: "",
};

export const loginReducer = (state = loginInitialState, action) => {
  switch (action.type) {
    case SET_LOGIN_ID:
      return { ...state, id: action.payload };
    case SET_LOGIN_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

// 회원가입 리듀서
const signupInitialState = {
  id: "",
  password: "",
  email: "",
  confirmPassword: "",
};

export const signupReducer = (state = signupInitialState, action) => {
  console.log("최종적으로 합쳐진 폼 데이터", JSON.stringify(action, null, 2));
  switch (action.type) {
    case SET_SIGNUP_ID:
      return { ...state, id: action.payload };
    case SET_SIGNUP_PASSWORD:
      return { ...state, password: action.payload };
    case SET_SIGNUP_EMAIL:
      return { ...state, email: action.payload };
    case SET_SIGNUP_CONFIRM_PASSWORD:
      return { ...state, confirmPassword: action.payload };
    default:
      return state;
  }
};

// 프로필 업데이트 리듀서
const profileUpdateInitialState = {
  id: "",
  password: "",
};

export const profileUpdateReducer = (
  state = profileUpdateInitialState,
  action
) => {
  switch (action.type) {
    case SET_PROFILE_UPDATE_ID:
      return { ...state, id: action.payload };
    case SET_PROFILE_UPDATE_PASSWORD:
      return { ...state, password: action.payload };
    default:
      return state;
  }
};

// 아이디 찾기 리듀서
const findIdInitialState = {
  email: "",
};

export const findIdReducer = (state = findIdInitialState, action) => {
  switch (action.type) {
    case SET_FIND_ID_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

// 비밀번호 찾기 리듀서
const findPasswordInitialState = {
  id: "",
  email: "",
};

export const findPasswordReducer = (
  state = findPasswordInitialState,
  action
) => {
  switch (action.type) {
    case SET_FIND_PASSWORD_ID:
      return { ...state, id: action.payload };
    case SET_FIND_PASSWORD_EMAIL:
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

// 로그인
export const SET_LOGIN_ID = "SET_LOGIN_ID";
export const SET_LOGIN_PASSWORD = "SET_LOGIN_PASSWORD";

// 회원가입
export const SET_SIGNUP_ID = "SET_SIGNUP_ID";
export const SET_SIGNUP_PASSWORD = "SET_SIGNUP_PASSWORD";
export const SET_SIGNUP_EMAIL = "SET_SIGNUP_EMAIL";
export const SET_SIGNUP_EMAIL_DOMAIN = "SET_SIGNUP_EMAIL_DOMAIN";
export const SET_SIGNUP_CONFIRM_PASSWORD = "SET_SIGNUP_CONFIRM_PASSWORD";

// 프로필 업데이트
export const SET_PROFILE_UPDATE_ID = "SET_PROFILE_UPDATE_ID";
export const SET_PROFILE_UPDATE_PASSWORD = "SET_PROFILE_UPDATE_PASSWORD";

// 아이디 찾기
export const SET_FIND_ID_EMAIL = "SET_FIND_ID_EMAIL";
export const SET_FIND_ID_EMAIL_DOMAIN = "SET_FIND_ID_EMAIL_DOMAIN";

// 비밀번호 찾기
export const SET_FIND_PASSWORD_ID = "SET_FIND_PASSWORD_ID";
export const SET_FIND_PASSWORD_EMAIL = "SET_FIND_PASSWORD_EMAIL";
export const SET_FIND_PASSWORD_EMAIL_DOMAIN = "SET_FIND_PASSWORD_EMAIL_DOMAIN";

export const formControl = (field, value) => {
  switch (field) {
    // 로그인
    case "id":
      return { type: SET_LOGIN_ID, payload: value };
    case "password":
      return { type: SET_LOGIN_PASSWORD, payload: value };

    // 회원가입
    case "signupId":
      return { type: SET_SIGNUP_ID, payload: value };
    case "signupPassword":
      return { type: SET_SIGNUP_PASSWORD, payload: value };
    case "email":
      return { type: SET_SIGNUP_EMAIL, payload: value };
    case "emailDomain":
      return { type: SET_SIGNUP_EMAIL_DOMAIN, payload: value };
    case "confirmPassword":
      return { type: SET_SIGNUP_CONFIRM_PASSWORD, payload: value };

    // 프로필 업데이트
    case "profileUpdateId":
      return { type: SET_PROFILE_UPDATE_ID, payload: value };
    case "profileUpdatePassword":
      return { type: SET_PROFILE_UPDATE_PASSWORD, payload: value };

    // 아이디 찾기
    case "findIdEmail":
      return { type: SET_FIND_ID_EMAIL, payload: value };
    case "findIdEmailDomain":
      return { type: SET_FIND_ID_EMAIL_DOMAIN, payload: value };

    // 비밀번호 찾기
    case "findPasswordId":
      return { type: SET_FIND_PASSWORD_ID, payload: value };
    case "findPasswordEmail":
      return { type: SET_FIND_PASSWORD_EMAIL, payload: value };
    case "findPasswordEmailDomain":
      return { type: SET_FIND_PASSWORD_EMAIL_DOMAIN, payload: value };

    default:
      return null;
  }
};

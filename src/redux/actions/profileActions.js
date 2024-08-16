export const SET_USER_INFO = "SET_USER_INFO";

export const setUserInfo = (userInfo) => {
  return {
    type: SET_USER_INFO,
    payload: userInfo,
  };
};

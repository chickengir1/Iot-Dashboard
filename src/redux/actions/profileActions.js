export const SET_PROFILE_DATA = "SET_PROFILE_DATA";

export const setProfileData = (userData) => ({
  type: SET_PROFILE_DATA,
  payload: userData,
});

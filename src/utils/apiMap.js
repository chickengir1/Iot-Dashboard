const API_BASE_URL = "/api";

export const API_PATHS = {
  REGISTER: `${API_BASE_URL}/auth/register`,
  FINDPW: `${API_BASE_URL}/auth/forgot-password`,
  FINDID: `${API_BASE_URL}/auth/find-userid`,
  LOGIN: `${API_BASE_URL}/auth/login`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  REMOVE_USER: `${API_BASE_URL}/me/`,
};

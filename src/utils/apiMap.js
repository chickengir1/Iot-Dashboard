const API_BASE_URL = "/api";

export const API_PATHS = {
  REGISTER: `${API_BASE_URL}/auth/register`,
  FINDPW: `${API_BASE_URL}/auth/forgot-password`,
  FINDID: `${API_BASE_URL}/auth/find-id`,
  LOGIN: `${API_BASE_URL}/auth/login`,
  LOGOUT: `${API_BASE_URL}/auth/logout`,
  REMOVE_USER: `${API_BASE_URL}/me/`,
  DEVICES: `${API_BASE_URL}/devices/`,
  DEVICESDETAIL: (deviceId) => `${API_BASE_URL}/devices/${deviceId}`,
};

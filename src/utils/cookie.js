import Cookies from "js-cookie";

const cookieStorage = {
  getItem: (key) => {
    return Promise.resolve(Cookies.get(key));
  },
  setItem: (key, value) => {
    return Promise.resolve(Cookies.set(key, value));
  },
  removeItem: (key) => {
    return Promise.resolve(Cookies.remove(key));
  },
};

export default cookieStorage;

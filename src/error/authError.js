/*
import { jwtDecode } from "jwt-decode";

export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

export const verifyToken = () => {
  const token = getCookie("userCookie");

  if (!token) {
    throw new Error("인증 토큰이 존재하지 않습니다.");
  }

  const decoded = jwtDecode(token);
  const currentTime = Date.now() / 1000;

  if (decoded.exp < currentTime) {
    throw new Error("인증 토큰이 만료되었습니다.");
  }

  return decoded;
};
*/

// 나중에 만들기

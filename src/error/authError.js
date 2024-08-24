import { useSelector } from "react-redux";
import { useEffect } from "react";

export const useAuth = () => {
  const profile = useSelector((state) => state.profile);

  useEffect(() => {
    if (!profile || !profile.userId) {
      console.error("인증되지 않았습니다. 사용자 정보가 없습니다.");
      throw new Error("인증되지 않았습니다.");
    }
  }, [profile]);

  return profile && profile.userId;
};

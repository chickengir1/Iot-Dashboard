import { getEmail } from "@utils/commonUtils";
import { save, remove } from "@utils/localStorage";
import { setProfileData } from "@redux/actions/profileActions";

// 로그인 정보를 기억하는 유틸 파일
export const updateProfileData = async (response, remember, dispatch) => {
  if (response && response.user) {
    const profileData = {
      userId: response.user.userId,
      email: getEmail(response.user.email),
    };

    await dispatch(setProfileData(profileData));

    if (remember) {
      save("userProfile", profileData);
      save("remember", remember);
    } else {
      remove("userProfile");
      remove("remember");
    }
  }
};

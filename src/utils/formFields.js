// 로그인
export const loginFormFields = [
  { label: "아이디", name: "id", type: "text" },
  { label: "비밀번호", name: "password", type: "password" },
];

// 회원가입
export const signupFormFields = [
  { label: "아이디", name: "id", type: "text" },
  { label: "비밀번호", name: "password", type: "password" },
  { label: "비밀번호 확인", name: "confirmPassword", type: "password" },
];

// 프로필 업데이트
export const profileUpdateFormFields = [
  { label: "아이디", name: "id", type: "text" },
  { label: "비밀번호 변경", name: "password", type: "password" },
];

// 아이디 찾기
export const findIdFormFields = [
  // 이 필드는 없어도 될듯
  { label: "이메일", name: "email", type: "text" },
  { label: "도메인", name: "emailDomain", type: "select" },
];

// 비밀번호 찾기
export const findPasswordFormFields = [
  // 이 필드도 아이디 빼고 이메일 도메인은 프롬 프로바이더로 공급할거라 없어도 될듯 다른 방법이 필요함
  { label: "아이디", name: "id", type: "text" },
  { label: "이메일", name: "email", type: "text" },
  { label: "도메인", name: "emailDomain", type: "select" },
];

export const emailDomains = ["gmail.com", "naver.com", "daum.net"];

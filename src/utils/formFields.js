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

// 비밀번호 찾기
export const findPasswordFormFields = [
  { label: "아이디", name: "id", type: "text" },
];

// 투두 입력하기
export const todoFields = { label: "오늘 할 일", name: "todo", type: "text" };

export const emailDomains = ["gmail.com", "naver.com", "daum.net"];

import { SET_FORM_DATA } from "../actions/formAction";

const initialState = {
  login: { id: "", password: "" },
  signup: { id: "", password: "", email: "", confirmPassword: "" },
  profileUpdate: { id: "", password: "" },
  findId: { email: "" },
  findPassword: { id: "", email: "" },
  todo: { date: "", description: "", isFinish: "" },
};

export const formReducer = (state = initialState, action) => {
  const { formType, formData } = action.payload || {};

  switch (action.type) {
    case SET_FORM_DATA:
      return {
        ...state,
        [formType]: {
          ...state[formType],
          ...formData,
        },
      };
    default:
      return state;
  }
};

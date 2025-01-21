import { SET_FORM_DATA } from "../actions/formAction";

const initialState = {
  login: { email: "", id: "", password: "" },
  signup: { id: "", password: "", email: "", confirmPassword: "" },
  profileUpdate: { email: "", password: "" },
  findId: { email: "" },
  findPassword: { id: "", email: "" },
  todo: { date: "", description: "", isFinish: "" },
  addDevice: {
    deviceId: "",
    deviceName: "",
    description: "",
  },
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

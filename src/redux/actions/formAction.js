export const SET_FORM_DATA = "SET_FORM_DATA";

export const setFormData = (formType, formData) => ({
  type: SET_FORM_DATA,
  payload: { formType, formData },
});

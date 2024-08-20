export const SET_MODAL_TYPE = "SET_MODAL_TYPE";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const setModalType = (modalType) => ({
  type: SET_MODAL_TYPE,
  payload: modalType,
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
});

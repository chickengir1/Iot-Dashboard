import { SET_MODAL_TYPE, CLOSE_MODAL } from "../actions/modalAction";
const initialModalState = {
  todo: { date: "", description: "", isFinish: "" },
};

function modalReducer(state = initialModalState, action) {
  const { modalType, modalData } = action.payload || {};

  switch (action.type) {
    case SET_MODAL_TYPE:
      return {
        ...state,
        [modalType]: {
          ...state[modalType],
          modalData,
        },
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalType: null,
      };
    default:
      return state;
  }
}

export default modalReducer;

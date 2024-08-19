import { SET_MODAL_TYPE, CLOSE_MODAL } from "../actions/modalAction";
const initialModalState = {
  modalType: null,
};

function modalReducer(state = initialModalState, action) {
  switch (action.type) {
    case SET_MODAL_TYPE:
      return {
        ...state,
        modalType: action.payload,
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

import { SET_MODAL_TYPE, CLOSE_MODAL } from "../actions/modalAction";
const initialModalState = {
  openModal: null,
};

function modalReducer(state = initialModalState, action) {
  switch (action.type) {
    case SET_MODAL_TYPE:
      return {
        ...state,
        openModal: action.payload,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        openModal: null,
      };
    default:
      return state;
  }
}

export default modalReducer;

import {
  INCREMENT_UNREAD_COUNT,
  SET_UNREAD_COUNT,
  DECREMENT_UNREAD_COUNT,
  RESET_UNREAD_COUNT,
} from "../actions/notificationActions";

const initialState = {
  unreadCount: 1,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UNREAD_COUNT:
      return {
        ...state,
        unreadCount: action.payload,
      };
    case INCREMENT_UNREAD_COUNT:
      return {
        ...state,
        unreadCount: state.unreadCount + 1,
      };
    case DECREMENT_UNREAD_COUNT:
      return {
        ...state,
        unreadCount: state.unreadCount > 0 ? state.unreadCount - 1 : 0,
      };
    case RESET_UNREAD_COUNT:
      return {
        ...state,
        unreadCount: 0,
      };
    default:
      return state;
  }
};

export default notificationReducer;

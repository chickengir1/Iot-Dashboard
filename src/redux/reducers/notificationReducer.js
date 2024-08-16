import { SET_UNREAD_COUNT } from "../actions/notificationActions";

const initialState = {
  unreadCount: 4,
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UNREAD_COUNT:
      return {
        ...state,
        unreadCount: action.payload,
      };
    default:
      return state;
  }
};

export default notificationReducer;

export const SET_UNREAD_COUNT = "SET_UNREAD_COUNT";
export const INCREMENT_UNREAD_COUNT = "INCREMENT_UNREAD_COUNT";
export const DECREMENT_UNREAD_COUNT = "DECREMENT_UNREAD_COUNT";
export const RESET_UNREAD_COUNT = "RESET_UNREAD_COUNT";

export const setUnreadCount = (count) => {
  return {
    type: SET_UNREAD_COUNT,
    payload: count,
  };
};

export const incrementUnreadCount = () => {
  return {
    type: INCREMENT_UNREAD_COUNT,
  };
};

export const decrementUnreadCount = () => {
  return {
    type: DECREMENT_UNREAD_COUNT,
  };
};

export const resetUnreadCount = () => {
  return {
    type: RESET_UNREAD_COUNT,
  };
};

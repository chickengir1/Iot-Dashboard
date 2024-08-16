export const SET_UNREAD_COUNT = "SET_UNREAD_COUNT";

export const setUnreadCount = (count) => {
  return {
    type: SET_UNREAD_COUNT,
    payload: count,
  };
};

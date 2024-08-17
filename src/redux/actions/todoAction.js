export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addTodo = (description) => {
  return {
    type: ADD_TODO,
    payload: {
      description,
      isFinish: false,
      date: Date.now(),
    },
  };
};

export const removeTodo = (date) => {
  return {
    type: REMOVE_TODO,
    payload: date,
  };
};

export const toggleTodo = (date) => {
  return {
    type: TOGGLE_TODO,
    payload: date,
  };
};

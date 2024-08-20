import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "../actions/todoAction";

const initialState = {
  todos: [
    {
      date: "2024-08-13",
      description: "꽃에 물주기",
      isFinish: true,
    },
    {
      date: "2024-08-13",
      description: "씨앗 심기",
      isFinish: true,
    },
    {
      date: "2024-08-14",
      description: "칭찬 해주기",
      isFinish: false,
    },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        todos: [...state.todos, action.payload],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.date !== action.payload),
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.date === action.payload
            ? { ...todo, isFinish: !todo.isFinish }
            : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;

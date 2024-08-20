export const loadTodos = () => {
  try {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
  } catch (error) {
    console.error("로컬스토리지 불러오기에 실패하였습니다.", error);
    return [];
  }
};

export const saveTodos = (todos) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos));
  } catch (error) {
    console.error("로컬스토리지 저장에 실패하였습니다.", error);
  }
};

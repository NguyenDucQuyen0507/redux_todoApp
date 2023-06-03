export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
    // Định kiểu dữ liệu trước khi đẩy lên
  };
};

export const toggleTodoStatus = (todoId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: todoId,
    // muốn biết thằng nào mà mình check thì phải có id của thằng đó
  };
};

export const addFilterChange = (text) => {
  return {
    type: "filterList/addFilterChange",
    payload: text,
  };
};

export const addFilterStatus = (status) => {
  return {
    type: "filterList/addFilterStatus",
    payload: status,
  };
};
export const addFilterPriorities = (prioryties) => {
  return {
    type: "filterList/addFilterPriorities",
    payload: prioryties,
  };
};

import { createSelector } from "@reduxjs/toolkit";

export const todoSearchSelector = (state) => state.filters.search;
export const todoListStatus = (state) => state.filters.status;
export const todoListPrioryties = (state) => state.filters.priority;
export const todoListSelector = (state) =>
  // {
  //   const searchText = todoSearchSelector(state);
  //   const todoSearning = state.todoList.filter((todo) => {
  //     return todo.name.includes(searchText);
  //   });
  //   return todoSearning;
  // };
  state.todoList;

// Bây h ta sẽ thực hiện việc nếu như filed name trong todoList có chứa thằng Search hay không nếu chứa thì in thằng name trùng với Search

// Còn cách nữa là ta sẽ dùng một phương thức reselect
//npm i reselect
export const todosRemainingSelector = createSelector(
  todoListSelector,
  todoListStatus,
  todoSearchSelector,
  todoListPrioryties,
  (todoList, status, searchText, prioryties) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        // return todo.name.includes(searchText);
        return prioryties.length
          ? todo.name.includes(searchText) && prioryties.includes(todo.priority)
          : todo.name.includes(searchText);
        //Nếu status là All thì hiển thị tất cả
        //ta sẽ kiểm tra thêm điều kiện priority
        //Nếu prioryties không có giá trị trong mảng tức là chwua chọn priority thì nó sẽ hiện ra tất cả các nhiệm có trong Search
        //Ngc lại thì nó sẽ hiện tất cả nhiệm vụ có trong Search và đồng thời trong nhiệm vụ đó prioryty có trong mảng Prioryty mình vừa chọn
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (prioryties.length ? prioryties.includes(todo.priority) : true)
        //hiển thị tất cả đồng thời status phải là Completed. Nếu đúng là completed thì hiển thị
        //thằng nào có completed là true và nếu không phải true thì hiển thị thằng còn lại
        //Nếu status === "Todo" và kt xem nếu mảng có giá trị thì mảng đó có chứa nhiệm vụ là Todo thì hiện lên
        //Còn không sẽ là true thì nó chỉ sét 2 đk trước đó
      );
    });
  }
);
//tương ứng với nhau

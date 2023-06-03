import { combineReducers } from "redux";
import filterReducer from "../components/Filter/filtersSlice";
import TodoListReducer from "../components/TodoList/todoListSlice";

// const useReducer = (state = initState, action) => {
//   //kiểm tra dữ liệu khi người dùng click vào nút add
//   console.log({ state, action });
//   switch (action.type) {
//     case "todoList/addTodo":
//       return {
//         //b1 phải copy giá trị ban đầu
//         ...state,
//         todoList: [
//           //ta cũng copy giá trị trong todoList trước khi update nó
//           ...state.todoList,
//           //   { id: 4, name: "Learn Java", complete: false, priority: "Medium" },
//           //cập nhật dữ liệu vào todoList
//           action.payload,
//         ],
//       };
//     case "filterList/addFilterChange":
//       return {
//         ...state,
//         filter: {
//           ...state.filter,
//           search: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };
// export default useReducer;

// const rootRducers = (state = {}, action) => {
//   return {
//     filters: filterReducer(state.filters, action),
//     todoList: TodoListReducer(state.todoList, action),
//   };
// };

const rootRducers = combineReducers({
  filters: filterReducer,
  todoList: TodoListReducer,
});
export default rootRducers;
//Đây được gọi là split reducer là chia ra các reducer nhỏ sau đó gọi vào reducer lớn cho dễ quản lý
//Reducer của phần nào thì thuộc reducer của component đó

//H ta sẽ viết gọn hơn bằng phương thức trong redux

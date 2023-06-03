// const initState = [
//   { id: 1, name: "Learn React", completed: false, priority: "High" },
//   { id: 2, name: "Learn Node", completed: true, priority: "Medium" },
//   { id: 3, name: "Learn Javascript", completed: false, priority: "Low" },
// ];

// const TodoListReducer = (state = initState, action) => {
//   //kiểm tra dữ liệu khi người dùng click vào nút add
//   console.log({ state, action });
//   switch (action.type) {
//     case "todoList/addTodo":
//       //b1 phải copy giá trị ban đầu
//       // ...state,
//       // todoList: [
//       //ta cũng copy giá trị trong todoList trước khi update nó
//       //   ...state.todoList,
//       //   { id: 4, name: "Learn Java", complete: false, priority: "Medium" },
//       //cập nhật dữ liệu vào todoList
//       //   action.payload,
//       // ],
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map(
//         (todo) =>
//           todo.id === action.payload
//             ? { ...todo, completed: !todo.completed }
//             : todo
//         //Ta sẽ sét hết tất cả dữ liệu với dk id === id của thằng được check, nếu đúng thì ta cập nhật lại state rồi mới thay đổi trạng completed false nếu ban đầu nó là true và ngược lại. Và ngược lại thì giữ nguyên trạng thái
//       );
//     default:
//       return state;
//   }
// };
// export default TodoListReducer;

import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn React", completed: false, priority: "High" },
    { id: 2, name: "Learn Node", completed: true, priority: "Medium" },
    { id: 3, name: "Learn Javascript", completed: false, priority: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
      //vì phải thêm nó vô nên ta mới push
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      //Dùng find thì nó sẽ trả đúng 1 object cần tìm
      //tìm id trong state === id được dispatch khi click
      //và sẽ update lại trạng thái
      currentTodo.completed = !currentTodo.completed;
    },
  },
});

// const initState = {
//   search: "",
//   status: "All",
//   //trạng thái
//   priority: [],
//   //mức độ ưu tiên, cấu trúc dữ liệu là 1 array
// };

// const filterReducer = (state = initState, action) => {
//   //kiểm tra dữ liệu khi người dùng click vào nút add
//   // console.log({ state, action });
//   switch (action.type) {
//     case "filterList/addFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };

//     case "filterList/addFilterStatus":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filterList/addFilterPriorities":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export default filterReducer;
import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filterList",
  initialState: {
    search: "",
    status: "All",
    //trạng thái
    priority: [],
  },
  reducers: {
    addFilterChange: (state, action) => {
      //Giúp ta có thẻ thao tác trực tiếp trên object hoặc là array bằng mutation
      state.search = action.payload;
      //Nó sẽ có type sẽ là filterList/addFilterChange
      //tương tự như một action
    },
    addFilterStatus: (state, action) => {
      state.status = action.payload;
    },
    addFilterPriorities: (state, action) => {
      state.priority = action.payload;
    },
  },
});

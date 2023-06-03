// import { createStore } from "redux";
// import rootRducers from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// const composeEnhancers = composeWithDevTools();
// const store = createStore(rootRducers, composeEnhancers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filter/filtersSlice";
import todoListSlice from "../components/TodoList/todoListSlice";

const store = configureStore({
  // reducer: rootReducer,
  // devTools: true, // Bật devtools extension
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;

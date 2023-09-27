import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "./features/crudSlice";
export default configureStore({
  reducer: { crud: crudReducer },
});

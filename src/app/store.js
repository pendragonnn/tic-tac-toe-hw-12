import { configureStore } from "@reduxjs/toolkit";
import { ticTacToe } from "../features/ticTacToeSlice";

const store = configureStore({
  reducer: ticTacToe.reducer,
});

export default store;

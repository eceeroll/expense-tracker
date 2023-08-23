import { configureStore } from "@reduxjs/toolkit";
import balanceSlice from "./balance-slice";

const store = configureStore({
  reducer: { balance: balanceSlice.reducer },
});

export default store;

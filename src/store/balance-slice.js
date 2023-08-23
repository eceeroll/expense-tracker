import { createSlice } from "@reduxjs/toolkit";

const balanceInitialState = {
  balance: 0,
  expense: 0,
  income: 0,
  totalExpense: 0,
  totalIncome: 0,
  historyList: [],
};

const balanceSlice = createSlice({
  name: "balance",
  initialState: balanceInitialState,
  reducers: {
    addIncome: (state, action) => {
      state.balance = state.balance + action.payload;
      state.totalIncome = state.totalIncome + action.payload;
    },
    addExpense: (state, action) => {
      state.balance = state.balance + action.payload;
      state.totalExpense += Math.abs(action.payload);
    },
    addToHistoryList: (state, action) => {
      state.historyList.push(action.payload);
    },
  },
});

export const balanceActions = balanceSlice.actions;
export default balanceSlice;

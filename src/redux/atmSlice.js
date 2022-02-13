import { createSlice } from "@reduxjs/toolkit";

const atmSlice = createSlice({
  name: "atm",
  initialState: {
    showAtm: false,
    balance: 1000,
  },
  reducers: {
    toggleShowAtm: (state) => {
      state.showAtm = !state.showAtm;
    },
    setBalance: (state) => {
      state.balance = state.balance;
    },
    addOneHundred: (state) => ({ ...state, balance: state.balance + 100 }),
    addTwoHundred: (state) => ({ ...state, balance: state.balance + 200 }),
    addFiveHundred: (state) => ({ ...state, balance: state.balance + 500 }),
    addOneThousand: (state) => ({ ...state, balance: state.balance + 1000 }),
    withdrawOneHundred: (state) => ({ ...state, balance: state.balance - 100 }),
    withdrawTwoHundred: (state) => ({ ...state, balance: state.balance - 200 }),
    withdrawFiveHundred: (state) => ({
      ...state,
      balance: state.balance - 500,
    }),
    withdrawOneThousand: (state) => ({
      ...state,
      balance: state.balance - 1000,
    }),
  },
});

export const {
  toggleShowAtm,
  setBalance,
  addOneHundred,
  addTwoHundred,
  addFiveHundred,
  addOneThousand,
  withdrawOneHundred,
  withdrawTwoHundred,
  withdrawFiveHundred,
  withdrawOneThousand,
} = atmSlice.actions;
export default atmSlice.reducer;

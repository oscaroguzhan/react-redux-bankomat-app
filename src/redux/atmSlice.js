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
    setBalance: (state, action) => {
      state.balance = action.payload;
    },
  },
});

export const { toggleShowAtm, setBalance } = atmSlice.actions;
export default atmSlice.reducer;

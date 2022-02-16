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
    depositValue: (state, action) => ({
      ...state,
      balance: state.balance + action.payload,
    }),
    WithdrawnValue: (state, action) => ({
      ...state,
      balance: state.balance - action.payload,
    }),
  },
});

export const { toggleShowAtm, depositValue, WithdrawnValue } = atmSlice.actions;
export default atmSlice.reducer;

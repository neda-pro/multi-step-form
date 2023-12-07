import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
};

const sideBarSlice = createSlice({
  name: "side bar",
  initialState,
  reducers: {
    setStep: (state, { payload }) => {
      state.step = payload;
    },
  },
});

export default sideBarSlice.reducer;
export const { setStep } = sideBarSlice.actions;

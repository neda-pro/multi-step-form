import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hideBack: true,
  hideNext: false,
  isConfirm: false,
};

const footerSlicer = createSlice({
  name: "footer",
  initialState,
  reducers: {
    setButtons: (state, { payload }) => {
      const { hideBack, hideNext, isConfirm } = payload;
      state.hideBack = hideBack;
      state.hideNext = hideNext;
      state.isConfirm = isConfirm;
    },
  },
});

export default footerSlicer.reducer;
export const { setButtons } = footerSlicer.actions;

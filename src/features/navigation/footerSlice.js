import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hideBack: true,
  hideNext: false,
  isConfirm: false,
  next: "plan",
  previous: "",
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
    setNav: (state, { payload }) => {
      const { next, previous } = payload;
      state.next = next;
      state.previous = previous;
    },
  },
});

export default footerSlicer.reducer;
export const { setButtons, setNav } = footerSlicer.actions;

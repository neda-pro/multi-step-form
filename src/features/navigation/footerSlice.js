import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isHome: true,
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
    setIsHome: (state, { payload }) => {
      state.isHome = payload;
    },
  },
});

export default footerSlicer.reducer;
export const { setButtons, setNav, setIsHome } = footerSlicer.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hideBack: true,
  hideNext: false,
  isConfirm: false,
};

const footerSlicer = createSlice({
  name: "footer",
  initialState,
  reducers: {},
});

export default footerSlicer.reducer;

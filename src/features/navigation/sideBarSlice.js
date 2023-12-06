import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
};

const sideBarSlice = createSlice({
  name: "side bar",
  initialState,
  reducers: {},
});

export default sideBarSlice.reducer;

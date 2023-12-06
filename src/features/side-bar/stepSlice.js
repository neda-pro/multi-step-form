import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  step: 1,
};

const stepSlice = createSlice({
  name: "side bar",
  initialState,
  reducers: {},
});

export default stepSlice.reducer;

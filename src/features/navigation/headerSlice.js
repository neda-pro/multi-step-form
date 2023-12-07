import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Personal info",
  description: "Please provide your name, email address, and phone number.",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    setTitle: (state, { payload }) => {
      state.title = payload;
    },
    setDescription: (state, { payload }) => {
      state.description = payload;
    },
  },
});

export default headerSlice.reducer;
export const { setTitle } = headerSlice.actions;
export const { setDescription } = headerSlice.actions;

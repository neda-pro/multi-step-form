import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "Personal info",
  description: "Please provide your name, email address, and phone number.",
};

const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {},
});

export default headerSlice.reducer;

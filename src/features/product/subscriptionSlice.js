import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: "",
    phone: null,
  },
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload; //state is a copy of initial state that we want to change it.
    },
  },
});

export default subscriptionSlice.reducer;
export const { setUser } = subscriptionSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: "",
    email: "",
    phone: null,
  },
  price: {
    monthly: {
      arcade: 9,
      advanced: 12,
      pro: 15,
    },
    yearly: {
      arcade: 90,
      advanced: 120,
      pro: 150,
    },
  },
  isYearly: false,
  selectedPlan: "arcade",
};

const subscriptionSlice = createSlice({
  name: "subscription",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload; //state is a copy of initial state that we want to change it.
    },
    toggleIsYearly: (state) => {
      state.isYearly = !state.isYearly;
    },
    setSelectedPlan: (state, { payload }) => {
      state.selectedPlan = payload;
    },
  },
});

export default subscriptionSlice.reducer;
export const { setUser, toggleIsYearly, setSelectedPlan } =
  subscriptionSlice.actions;

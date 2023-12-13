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
  addOns: [
    {
      id: 1,
      title: "Online service",
      subTitle: "Access to multiplayer games",
      price: {
        monthly: 1,
        yearly: 10,
      },
      isChecked: false,
    },
    {
      id: 2,
      title: "Larger storage",
      subTitle: "Extra 1TB of cloud save",
      price: {
        monthly: 2,
        yearly: 20,
      },
      isChecked: false,
    },
    {
      id: 3,
      title: "Customizable profile",
      subTitle: "Custom theme on your profile",
      price: {
        monthly: 2,
        yearly: 20,
      },
      isChecked: false,
    },
  ],
  totalPrice: 0,
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
    setAddOn: (state, { payload }) => {
      const addOn = state.addOns.find((addOn) => addOn.id === payload);
      addOn.isChecked = !addOn.isChecked;
    },
    setTotalPrice: (state, { payload }) => {
      state.totalPrice = payload;
    },
  },
});

export default subscriptionSlice.reducer;
export const {
  setUser,
  toggleIsYearly,
  setSelectedPlan,
  setAddOn,
  setTotalPrice,
} = subscriptionSlice.actions;

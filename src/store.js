import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./features/side-bar/stepSlice";

export const store = configureStore({
  reducer: {
    step: stepReducer,
  },
});

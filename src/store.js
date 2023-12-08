import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./features/navigation/sideBarSlice";
import headerReducer from "./features/navigation/headerSlice";
import footerReducer from "./features/navigation/footerSlice";
import subscriptionReducer from "./features/product/subscriptionSlice";
export const store = configureStore({
  reducer: {
    step: stepReducer,
    heading: headerReducer,
    footer: footerReducer,
    subscription: subscriptionReducer,
  },
});

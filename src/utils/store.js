import cartSlice from "./cartSlice";
import loginSlice from "./loginSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    loginStatus: loginSlice,
  },
});

export default store;
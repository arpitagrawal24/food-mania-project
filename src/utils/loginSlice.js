import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "loginStatus",
  initialState: {
    isLoggedIn: localStorage.getItem("user") ? true : false,
  },
  reducers: {
    setLoginStatus: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setLoginStatus } = loginSlice.actions;

export default loginSlice.reducer;

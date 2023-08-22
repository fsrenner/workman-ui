import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    user: {},
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
});

export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;

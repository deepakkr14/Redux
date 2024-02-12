import { createSlice } from "@reduxjs/toolkit";
const initialState = { auth: false };
const AuthSlice = createSlice({
  name: "authenticate",
  initialState: initialState,
  reducers: {
    toggle(state) {
      state.auth = !state.auth;
    },
  },
});
export const AuthActions= AuthSlice.actions;

export default AuthSlice.reducer;

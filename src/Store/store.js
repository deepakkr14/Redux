import { createSlice, configureStore } from "@reduxjs/toolkit";
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
const counterSlice = createSlice({
  name: "counters",
  initialState: {counter:0},
  reducers: {
    increment(state) {
      state.counter += 5;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

// const store = configureStore({ reducer:AuthSlice.reducer });
export const CounterActions=counterSlice.actions;
export const AuthActions= AuthSlice.actions;
const store = configureStore({
  reducer : {s : counterSlice.reducer,auth: AuthSlice.reducer},
});
export default store;

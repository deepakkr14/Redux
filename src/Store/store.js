import { createSlice, configureStore } from "@reduxjs/toolkit";
const initialState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter += 5;
    },
    decrement(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
// const counterReducer = (state = { counter: 0 }, action) => {
  //   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + action.payload,
//     };
//   }
//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - action.payload,
//     };
//   }
//   return state;
// };
export const CounterActions= counterSlice.actions;
const store = configureStore({ reducer: counterSlice.reducer });
export default store;

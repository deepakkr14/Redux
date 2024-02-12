import { createSlice } from "@reduxjs/toolkit";
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
  export const CounterActions=counterSlice.actions;
 
  // const store = configureStore({ reducer:AuthSlice.reducer });
  export default counterSlice.reducer;
import {  configureStore } from "@reduxjs/toolkit";
import AuthReducer from "./AuthSlice";
import CounterReducer from "./counterSlice";

const store = configureStore({
  reducer : {counter : CounterReducer,auth:AuthReducer},
});
export default store;

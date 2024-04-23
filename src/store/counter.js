import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = {
  counter: 0,
  isDisplayCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter = state.counter + action.payload;
    },
    decrement(state, action) {
      state.counter = state.counter - action.payload;
    },
    toggleCounter(state) {
      state.isDisplayCounter = !state.isDisplayCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;

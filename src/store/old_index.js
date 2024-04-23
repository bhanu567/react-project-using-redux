import { createStore } from "redux";

const initialState = {
  counter: 0,
  isDisplayCounter: true,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + action.value,
      isDisplayCounter: state.isDisplayCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - action.value,
      isDisplayCounter: state.isDisplayCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      isDisplayCounter: !state.isDisplayCounter,
    };
  }
  return state;
};

const store = createStore(counterReducer);
export default store;

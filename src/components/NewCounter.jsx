import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter";
import "./Counter.css";

const Counter = () => {
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter);
  // const toggle = useSelector((state) => state.isDisplayCounter);
  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.isDisplayCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment(1)); //{type:SOME_UIQUE_IDENTIFIER, payload:1}
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement(1));
  };
  const increaseHandler = () => {
    dispatch(counterActions.increment(5));
  };
  const decreaseHandler = () => {
    dispatch(counterActions.decrement(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <div className="outer">
      {toggle && (
        <>
          <h1 style={{ marginBottom: "10px" }}>Counter</h1>
          <div className="inner">
            <button
              className="button"
              style={{
                borderRight: "2px solid black",
              }}
              onClick={decreaseHandler}
            >
              -5
            </button>
            <button className="button" onClick={decrementHandler}>
              -1
            </button>
            <div className="counter-value-div">{counter}</div>
            <button className="button" onClick={incrementHandler}>
              +1
            </button>
            <button
              className="button"
              style={{
                borderLeft: "2px solid black",
              }}
              onClick={increaseHandler}
            >
              +5
            </button>
          </div>
        </>
      )}
      <button
        className="btn btn-dark btn-sm mt-2"
        onClick={toggleCounterHandler}
      >
        {toggle ? "Hide Counter" : "Show Counter"}
      </button>
    </div>
  );
};

export default Counter;

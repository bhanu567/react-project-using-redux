import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Counter.css";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.isDisplayCounter);

  const incrementHandler = () => {
    dispatch({ type: "increment", value: 1 });
  };
  const decrementHandler = () => {
    dispatch({ type: "decrement", value: 1 });
  };
  const increaseHandler = () => {
    dispatch({ type: "increment", value: 5 });
  };
  const decreaseHandler = () => {
    dispatch({ type: "decrement", value: 5 });
  };

  const toggleCounterHandler = () => {
    dispatch({ type: "toggle" });
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

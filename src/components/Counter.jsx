import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const incrementHandler = () => {
    dispatch({ type: "INCREMENTBY5" });
  };
  const decrementHandler = () => {
    dispatch({ type: "DECREMENTBY5" });
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ marginBottom: "10px" }}>Counter</h1>
      <div
        style={{
          display: "flex",
          border: "2px solid black",
          borderRadius: "5px",
          padding: "0",
        }}
      >
        <button
          style={{
            padding: "0px 15px",
            cursor: "pointer",
            border: "0px",
            backgroundColor: "transparent",
            fontWeight: "bold",
            fontSize: "20px",
          }}
          onClick={incrementHandler}
        >
          +
        </button>
        <div
          style={{
            borderLeft: "2px solid black",
            borderRight: "2px solid black",
            padding: "2px 25px",
            cursor: "no-drop",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          {counter}
        </div>
        <button
          style={{
            padding: "0px 15px",
            cursor: "pointer",
            border: "0px",
            backgroundColor: "transparent",
            fontWeight: "bold",
            fontSize: "20px",
          }}
          onClick={decrementHandler}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;

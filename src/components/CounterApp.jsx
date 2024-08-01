import React, { useState } from "react";
import Counter from "./Counter";
import { useNavigate } from "react-router-dom";

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [incrementValue, setIncrementValue] = useState(1);
  const navigate = useNavigate();

  const handleSetValue = () => {
    setCount(incrementValue);
  };

  const goBackToMain = () => {
    navigate("/");
  };

  return (
    <div className="counter-app">
      <button className="navigate-button" onClick={goBackToMain}>
        Home
      </button>
      <h1>Counter: {count}</h1>
      <button className="set-button" onClick={handleSetValue}>
        Set Value to {incrementValue}
      </button>
      <Counter
        count={count}
        setCount={setCount}
        incrementValue={incrementValue}
      />
      <label className="input-label">
        Set Increment/Decrement Value:
        <input
          type="number"
          value={incrementValue}
          onChange={(e) => setIncrementValue(Number(e.target.value))}
        />
      </label>
    </div>
  );
};

export default CounterApp;

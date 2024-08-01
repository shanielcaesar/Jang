import React from "react";

const Counter = ({ count, setCount, incrementValue }) => {
  const handleIncrement = () => {
    setCount(count + incrementValue);
  };

  const handleDecrement = () => {
    setCount(count - incrementValue);
  };

  return (
    <div className="buttons">
      <button className="counter-button" onClick={handleIncrement}>
        +
      </button>
      <button className="counter-button" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
};

export default Counter;

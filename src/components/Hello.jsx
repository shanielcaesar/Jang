import React from "react";
import { useNavigate } from "react-router-dom";

function Hello() {
  const navigate = useNavigate();

  const goBackToMain = () => {
    navigate("/");
  };
  const name = "Hero";
  return (
    <div className="hello-page">
      <div className="container">
        <h2>Hello, {name}</h2>
        <button className="main-button" onClick={goBackToMain}>
          Home
        </button>
      </div>
    </div>
  );
}

export default Hello;

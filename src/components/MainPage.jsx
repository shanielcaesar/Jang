import React from "react";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();

  const goToCounterApp = () => {
    navigate("/counter");
  };

  const goToHello = () => {
    navigate("/hello");
  };

  const goToStudents = () => {
    navigate("/students");
  };

  return (
    <div className="main-page">
      <button className="main-button" onClick={goToCounterApp}>
        Counter
      </button>
      <button className="main-button" onClick={goToHello}>
        Hello
      </button>
      <button className="main-button" onClick={goToStudents}>
        Students
      </button>
    </div>
  );
};

export default MainPage;

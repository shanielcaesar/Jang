import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/MainPage";
import CounterApp from "./components/CounterApp";
import Hello from "./components/Hello";
import Students from "./components/Students";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/counter" element={<CounterApp />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/hello" element={<Hello />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </Router>
  );
}

export default App;

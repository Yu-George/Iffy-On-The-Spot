import React, { useEffect, useState } from "react";
import "./App.css";
import Welcome from "./Components/Welcome/Welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Navbar from "./Components/Navbar/Navbar";
import Play from "./Components/Play/Play";
const App: React.FC = () => {
  const [mode, setMode] = useState(-1);
  const changeMode = (num: number) => {
    setMode((prev) => num);
  };
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/play" element={<Play />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import Welcome from "./Components/Welcome/Welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Navbar from "./Components/Navbar/Navbar";
import Play from "./Components/Play/Play";
import Results from "./Components/Results/Results";
const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/menu" element={<Menu />}></Route>
          <Route path="/play" element={<Play />}></Route>
          <Route path="/results" element={<Results />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;

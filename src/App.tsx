import React from "react";
import "./App.css";
import Welcome from "./Components/Welcome/Welcome";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu/Menu";
import Navbar from "./Components/Navbar/Navbar";
import Play from "./Components/Play/Play";
const App: React.FC = () => {
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Welcome />}></Route>
          <Route path="/menu" element={<Menu tokenName="" />}></Route>
          <Route path="/play" element={<Play />}></Route>
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;

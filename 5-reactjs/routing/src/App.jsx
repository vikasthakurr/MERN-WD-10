import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  );
};

export default App;

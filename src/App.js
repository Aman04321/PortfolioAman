import React from "react";
import "./index.css";
import Home from "./routes/Home";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact"
import { Route, Routes } from "react-router-dom"

function App(){
  return (
    <>
    <Routes>
      <Route path="/" from element={<Home />} />
      <Route path="/Project" from element={<Project />} />
      <Route path="/About" from element={<About />} />
      <Route path="/Contact" from element={<Contact />} />
    </Routes>
    </>
  )
}

export default App;

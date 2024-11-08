import React from "react"
import "./index.css";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
    )
}

export default App

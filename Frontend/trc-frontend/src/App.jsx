import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutUs from "./Components/Hero/AboutUs/AboutUs";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutUs></AboutUs>
    </div>
  );
}

export default App;

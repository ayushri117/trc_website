import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutUs from "./Components/AboutUs/AboutUs";
import Team from "./Components/Team/Team";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Team></Team>
    </div>
  );
}

export default App;

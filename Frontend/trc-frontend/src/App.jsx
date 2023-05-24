import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutUs from "./Components/AboutUs/AboutUs";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Team></Team>
      <Contact></Contact>
    </div>
  );
}

export default App;

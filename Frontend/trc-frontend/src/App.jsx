import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  );
}

export default App;

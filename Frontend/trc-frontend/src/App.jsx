import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero/Hero";
import AboutUs from "./Components/AboutUs/AboutUs";
import Team from "./Components/Team/Team";
import Contact from "./Components/Contact/Contact";
import Loading from "./Components/Loading";
import { AnimatePresence } from "framer-motion";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <AnimatePresence mode="wait">
      <div className="App">
        {isLoading && (
          <Loading isLoading={isLoading} setIsLoading={setIsLoading}></Loading>
        )}
        {!isLoading && (
          <>
            <Navbar></Navbar>
            <Hero></Hero>
            <AboutUs></AboutUs>
            <Team></Team>
            <Contact></Contact>
          </>
        )}
      </div>
    </AnimatePresence>
  );
}

export default App;

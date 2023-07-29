import Hero from "../Components/Hero/Hero";
import AboutUs from "../Components/AboutUs/AboutUs";
import Team from "../Components/Team/Team";
import Contact from "../Components/Contact/Contact";
import "./Home.css";
import { AnimatePresence } from "framer-motion";
const Homepage = () => {
  return (
    <div className="Main_Container_Web">
      <Hero></Hero>
      <AboutUs></AboutUs>
      <Team></Team>
      <Contact></Contact>
    </div>
  );
};

export default Homepage;

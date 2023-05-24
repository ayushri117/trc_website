import React from "react";
import bgVideo from "../../assets/bgVideo.mp4";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero_container">
      <div className="hero_overlay"></div>
      <video src={bgVideo} autoPlay loop muted></video>
      <div className="hero_content">
        <h1 className="hero_heading">THE ROBOTICS CLUB</h1>
        <h3 className="hero_subheading">IIT PALAKKAD</h3>
      </div>
    </div>
  );
};

export default Hero;

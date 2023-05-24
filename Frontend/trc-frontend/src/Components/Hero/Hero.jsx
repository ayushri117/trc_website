import React from "react";
import bgVideo from "../../assets/bgVideo.mp4";
import "./Hero.css";
import { motion } from "framer-motion";
import { ArrowDown } from "feather-icons-react/build/IconComponents";
import { Link } from "react-scroll";
import SplitType from "split-type";
import { animate, stagger } from "motion";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    const header = new SplitType("#hero_heading", { types: "words" });
    const subHeader = new SplitType("#hero_subheading", { types: "chars" });
    const heroElements = [...header.words, ...subHeader.chars];

    animate(
      heroElements,
      { y: [50, 0], opacity: [0, 1] },
      { duration: 1.2, delay: stagger(0.1) }
    );
  }, []);
  return (
    <div className="hero_container">
      <div className="hero_overlay"></div>
      <motion.video
        variants={{
          hidden: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
            transition: {
              duration: 2,
              ease: [0.6, 0.01, 0.05, 0.98],
            },
          },
        }}
        initial="hidden"
        animate="animate"
        src={bgVideo}
        autoPlay
        loop
        muted
      ></motion.video>
      <div className="hero_content">
        <h1 className="hero_heading" id="hero_heading">
          THE ROBOTICS CLUB
        </h1>
        <h3 className="hero_subheading" id="hero_subheading">
          IIT PALAKKAD
        </h3>
        <Link
          className="arrow_link"
          to="about_container"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <ArrowDown className="hero_icon"></ArrowDown>
        </Link>
      </div>
    </div>
  );
};

export default Hero;

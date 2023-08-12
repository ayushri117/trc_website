import React, { useRef, useEffect } from "react";
import "./AboutUs.css";
import { motion, useAnimation } from "framer-motion";
import SplitType from "split-type";
import { animate, stagger } from "motion";
import { useInView } from "react-intersection-observer";

const AboutUs = () => {
  const { ref, inView } = useInView();
  let headingControl = useAnimation();

  useEffect(() => {
    const paralines1 = new SplitType("#about_content_1", { types: "lines" });
    const paralines2 = new SplitType("#about_content_2", { types: "lines" });
    const paralines3 = new SplitType("#about_content_3", { types: "lines" });
    const paralines4 = new SplitType("#about_content_4", { types: "lines" });
    const aboutElement = [
      ...paralines1.lines,
      ...paralines2.lines,
      ...paralines3.lines,
      ...paralines4.lines,
    ];
    if (inView) {
      headingControl.start("animate");

      animate(
        aboutElement,
        { y: [50, 0], opacity: [0, 1] },
        { duration: 1.6, delay: stagger(0.05) }
      );
    } else {
      headingControl.start("hidden");
    }
  }, [inView]);
  return (
    <div className="about_container">
      <motion.div className="about_overlay">
        {" "}
        <motion.h1
          variants={{
            hidden: {
              y: 24,
              opacity: 0,
            },
            animate: {
              y: 0,
              opacity: 1,
              transition: {
                ease: [0.6, 0.01, 0.05, 0.98],
                duration: 1.6,
              },
            },
          }}
          initial="hidden"
          animate={headingControl}
          className="about_heading"
        >
          ABOUT US
        </motion.h1>
        <div className="about_info_box" ref={ref}>
          <p className="about_content" id="about_content_1">
            The Robotics Club (TRC) at IIT Palakkad was founded in 2016, drawing
            a diverse group of robot enthusiasts. TRC is a place where passion
            and creativity collide, creating a haven of joy for those fascinated
            by robotics. A sanctuary where your imagination can soar to great
            heights, Welcome to TRC!
          </p>
          <p className="about_content" id="about_content_2">
            Our objective is to provide you with a platform that encourages
            real-world learning. Our wide range of technologies includes
            unmanned aerial vehicles, hybrid wheels, and bio-robotics, where we
            created a prosthetic arm. With our dynamic approach, we believe you
            will find an excellent opportunity to learn, collaborate, and
            innovate with us.
          </p>
          <p className="about_content" id="about_content_3">
            Embracing every milestone achieved and valuing teamwork and
            knowledge sharing are the principles we stand by at TRC. Our club
            provides an environment where people, no matter their level of
            expertise, can assemble to push beyond limits and exchange
            innovative concepts.
          </p>
          <p className="about_content" id="about_content_4">
            Discover new technological boundaries and join us on a thrilling
            adventure of experimentation, creation, and using robots to shape
            the future! No matter who you are or where you come from, our
            community embraces everyone. Let's indulge our curiosity and keep
            pushing the limits in the constantly evolving world of robotics!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;

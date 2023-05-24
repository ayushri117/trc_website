import React, { useRef, useEffect } from "react";
import "./AboutUs.css";
import { motion, useInView, useAnimation } from "framer-motion";
import SplitType from "split-type";
import { animate, stagger } from "motion";

const AboutUs = () => {
  let ref = useRef(null);
  let inView = useInView(ref, { once: true });
  let headingControl = useAnimation();

  useEffect(() => {
    const paralines = new SplitType("#about_content", { types: "lines" });
    const aboutElement = [...paralines.lines];
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
      <motion.h1
        ref={ref}
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
      <p className="about_content" id="about_content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis nam
        tempora, eos pariatur neque cumque commodi nostrum, sint suscipit libero
        delectus atque veritatis aspernatur incidunt nemo dicta voluptates at
        sequi facilis ducimus iste! Optio quae, nemo quasi reiciendis sint odit,
        veniam fuga corporis delectus molestiae totam quaerat modi sapiente
        distinctio. Corporis harum quidem libero tempora nobis repellat possimus
        ipsum veniam rerum aspernatur? Optio, molestias? Hic at porro
        exercitationem dolorum earum quia odio, aperiam minus sint aspernatur
        sapiente maiores iste magni recusandae necessitatibus omnis expedita
        quae doloremque voluptas. Corporis numquam cum quis? Corporis inventore
        adipisci rerum libero, architecto magnam quod quis? Culpa impedit
        deleniti natus labore. Recusandae itaque dolorem amet quisquam assumenda
        ipsam saepe sequi enim quia. Blanditiis sint ducimus pariatur rerum enim
        nihil vitae aliquam labore iusto voluptatibus. Ullam provident ipsum
        commodi eaque alias quisquam beatae quaerat deserunt incidunt, porro ex.
        Neque facere tempora dolorum voluptatem sit corporis odit quia labore
        asperiores atque placeat veniam, cupiditate blanditiis fuga autem? Rem
        corporis id molestiae. Ratione aliquam voluptatem maiores velit,
        repellat ipsa omnis enim quisquam, nulla, consequatur eius! Illum labore
        corrupti eos quae esse ipsum, fugit magnam voluptate quo nihil
        veritatis, minima molestias! Molestiae eius doloribus unde veniam in eum
        modi iste.
      </p>
    </div>
  );
};

export default AboutUs;

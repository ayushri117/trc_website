import React, { useEffect, useRef } from "react";
import "./Team.css";
import MemberCard from "./MemberCard/MemberCard";
import headProfile from "../../assets/profile.jpeg";
import blankProfile from "../../assets/profile_blank.png";
import faculty1 from "../../assets/faculty1.jpg";
import faculty2 from "../../assets/faculty2.jpg";
import faculty3 from "../../assets/faculty3.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
import SplitType from "split-type";
import { animate, stagger } from "motion";

const Team = () => {
  let ref1 = useRef(null);
  let ref2 = useRef(null);
  let inView1 = useInView(ref1, { once: false });
  let inView2 = useInView(ref2, { once: false });
  let facultyControl = useAnimation();
  let memberControl = useAnimation();

  useEffect(() => {
    if (inView1) {
      facultyControl.start("animate");
    }
  }, [inView1]);

  useEffect(() => {
    if (inView2) {
      memberControl.start("animate");
    }
  }, [inView2]);

  return (
    <div className="team_container">
      <motion.h1
        className="team_heading"
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
        animate={facultyControl}
      >
        TEAM
      </motion.h1>
      <div className="team_faculty_container" ref={ref1}>
        <MemberCard
          control={facultyControl}
          profileImage={faculty1}
          name="Santhakumar Mohan"
          role="Faculty"
          delay={0}
        ></MemberCard>
        <MemberCard
          control={facultyControl}
          profileImage={faculty2}
          name="Vijay Murlidharan"
          role="Faculty"
          delay={0.2}
        ></MemberCard>
        <MemberCard
          control={facultyControl}
          profileImage={faculty3}
          name="Sneha Gajbhiye"
          role="Faculty"
          delay={0.4}
        ></MemberCard>
      </div>
      <div className="team_mem_members" ref={ref2}>
        <MemberCard
          control={memberControl}
          profileImage={headProfile}
          name="Ayush Singh"
          role="Club Head"
          delay={0}
        ></MemberCard>
        <MemberCard
          control={memberControl}
          profileImage={blankProfile}
          name="Shivansh Chaudhary"
          role="Mentor"
          delay={0.2}
        ></MemberCard>
      </div>
    </div>
  );
};

export default Team;

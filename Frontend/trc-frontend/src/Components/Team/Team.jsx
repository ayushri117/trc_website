import { useEffect, useRef } from "react";
import "./Team.css";
import MemberCard from "./MemberCard/MemberCard";
import headProfile from "../../assets/profile.jpeg";
import blankProfile from "../../assets/profile_blank.png";
import faculty1 from "../../assets/faculty1.jpg";
import faculty2 from "../../assets/faculty2.jpg";
import faculty3 from "../../assets/faculty3.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
import { useLoaderData, redirect, json } from "react-router-dom";
import axios from "axios";

const Team = () => {
  let ref1 = useRef(null);
  let ref2 = useRef(null);
  let inView1 = useInView(ref1, { once: false });
  let inView2 = useInView(ref2, { once: false });
  let facultyControl = useAnimation();
  let memberControl = useAnimation();
  const data = useLoaderData();

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
      <motion.div className="team_overlay">
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
          FACULTY
        </motion.h1>
        <div className="team_faculty_container" ref={ref1}>
          {data.map((item) => {
            if (item.isFaculty) {
              return (
                <MemberCard
                  control={facultyControl}
                  profileImage={item.image}
                  name={item.name}
                  role="Faculty"
                  delay={0}
                ></MemberCard>
              );
            }
          })}
        </div>
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
          animate={memberControl}
        >
          TEAM
        </motion.h1>
        <div className="team_mem_members" ref={ref2}>
          {data.map((item) => {
            if (!item.isFaculty) {
              return (
                <MemberCard
                  control={memberControl}
                  profileImage={item.image}
                  name={item.name}
                  role={item.role}
                  delay={0}
                ></MemberCard>
              );
            }
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default Team;

export async function loader() {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const response = await axios.get("http://localhost:4000/team", {
    headers: headers,
  });

  if (response.status === 500) {
    return json({ error: true, message: "Server Error" }, { status: 500 });
  }

  const resData = await response.data.team;

  return resData;
}

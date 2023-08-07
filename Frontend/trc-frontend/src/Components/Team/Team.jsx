import { useEffect, useRef } from "react";
import "./Team.css";
import MemberCard from "./MemberCard/MemberCard";
import headProfile from "../../assets/profile.jpeg";
import blankProfile from "../../assets/profile_blank.png";
import faculty1 from "../../assets/faculty1.jpg";
import faculty2 from "../../assets/faculty2.jpg";
import faculty3 from "../../assets/faculty3.jpg";
import { Phone } from "feather-icons-react/build/IconComponents";
import { Mail } from "feather-icons-react/build/IconComponents";
import { Linkedin } from "feather-icons-react/build/IconComponents";
import { motion, useInView, useAnimation } from "framer-motion";
import { useLoaderData, redirect, json, Await, defer } from "react-router-dom";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import { Suspense } from "react";

const Team = () => {
  let ref1 = useRef(null);
  let ref2 = useRef(null);
  let inView1 = useInView(ref1, { once: true });
  let inView2 = useInView(ref2, { once: true });
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
        {/* <motion.h1
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
        </motion.h1> */}
        <div className="team_faculty_container" ref={ref1}>
          <Suspense
            fallback={
              <>
                <TeamSkeleton></TeamSkeleton>
                <TeamSkeleton></TeamSkeleton>
                <TeamSkeleton></TeamSkeleton>
              </>
            }
          >
            <Await resolve={data.TeamData}>
              {(loadedTeam) =>
                // console.log(loadedTeamData.length);
                loadedTeam.length !== 0 ? (
                  loadedTeam.map((item) => {
                    if (item.isFaculty) {
                      return (
                        <MemberCard
                          control={facultyControl}
                          profileImage={item.image}
                          name={item.name}
                          role={item.role}
                          delay={0}
                        ></MemberCard>
                      );
                    }
                  })
                ) : (
                  <p style={{ color: "white" }}>No Faculty Found</p>
                )
              }
            </Await>
          </Suspense>
        </div>
        {data.TeamData ? (
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
        ) : (
          <></>
        )}

        <div className="team_mem_members" ref={ref2}>
          <Suspense
            fallback={
              <>
                <TeamSkeleton></TeamSkeleton>
                <TeamSkeleton></TeamSkeleton>
                <TeamSkeleton></TeamSkeleton>
              </>
            }
          >
            <Await resolve={data.TeamData}>
              {(loadedTeam) => {
                if (loadedTeam.length !== 0) {
                  return (
                    <>
                      {loadedTeam.map((item) => {
                        console.log(loadedTeam);
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
                    </>
                  );
                } else {
                  return <></>;
                }
              }}
            </Await>
            {/* <Await resolve={data.TeamData}>
              {(loadedTeam) =>
                // console.log(loadedTeamData.length);
                loadedTeam.length !== 0 ? (
                  loadedTeam.map((item) => {
                    if (!item.isFaculty) {
                      return (
                        <>
                          <MemberCard
                            control={memberControl}
                            profileImage={item.image}
                            name={item.name}
                            role={item.role}
                            delay={0}
                          ></MemberCard>
                        </>
                      );
                    }
                  })
                ) : (
                  <p style={{ color: "white" }}>No Resources Found</p>
                )
              }
            </Await> */}
          </Suspense>
        </div>
      </motion.div>
    </div>
  );
};

const TeamSkeleton = () => {
  return (
    <div className="memCard_container_Skeleton" id="memCard_container">
      <div className="mem_skeleton_img">
        <Skeleton circle height={200} width={200}></Skeleton>
      </div>

      <div className="mem_skeleton_name">
        <Skeleton height={24}></Skeleton>
      </div>
      <div className="mem_skeleton_role">
        <Skeleton height={19}></Skeleton>
      </div>

      <div className="mem_links_Skeleton">
        <Phone className="mem_icon"></Phone>
        <Mail className="mem_icon"></Mail>
        <Linkedin className="mem_icon"></Linkedin>
      </div>
    </div>
  );
};

export default Team;

export async function TeamLoader() {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  };

  const response = await axios.get(
    "https://trc-iitpkd-backend.onrender.com/team",
    {
      headers: headers,
    }
  );

  if (response.status === 500) {
    return json({ error: true, message: "Server Error" }, { status: 500 });
  }

  const resData = await response.data.team;

  return resData;
}

export async function loader() {
  return defer({
    TeamData: TeamLoader(),
  });
}

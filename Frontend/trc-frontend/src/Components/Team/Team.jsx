import React from "react";
import "./Team.css";
import MemberCard from "./MemberCard/MemberCard";
import headProfile from "../../assets/profile.jpeg";
import blankProfile from "../../assets/profile_blank.png";

const Team = () => {
  return (
    <div className="team_container">
      <h1 className="team_heading">TEAM</h1>
      <div className="team_faculty_container">
        <MemberCard
          profileImage={blankProfile}
          name="Santhakumar Mohan"
          role="Faculty"
        ></MemberCard>
        <MemberCard
          profileImage={blankProfile}
          name="Vijay Murlidharan"
          role="Faculty"
        ></MemberCard>
        <MemberCard
          profileImage={blankProfile}
          name="Sneha Gajbhiye"
          role="Faculty"
        ></MemberCard>
      </div>
      <div className="team_mem_members">
        <MemberCard
          profileImage={headProfile}
          name="Ayush Singh"
          role="Club Head"
        ></MemberCard>
        <MemberCard
          profileImage={blankProfile}
          name="Shivansh Chaudhary"
          role="Mentor"
        ></MemberCard>
      </div>
    </div>
  );
};

export default Team;

import "./MemberCard.css";
import { AnimatePresence, motion } from "framer-motion";
import { Phone } from "feather-icons-react/build/IconComponents";
import { Mail } from "feather-icons-react/build/IconComponents";
import { Linkedin } from "feather-icons-react/build/IconComponents";

const MemberCard = ({ profileImage, name, role, control, delay }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="memCard_container"
        id="memCard_container"
        variants={{
          hidden: {
            rotateY: -90,
            opacity: 0,
          },
          animate: {
            rotateY: 0,
            opacity: 1,
            transition: {
              duration: 0.8,
              ease: "backIn",
              delay: `${delay}`,
            },
          },
        }}
        initial="hidden"
        animate={control}
      >
        <div className="memImageBox">
          <img src={profileImage} className="mem_Image" />
        </div>
        <div className="mem_info">
          <h4 className="mem_Name">{name}</h4>
          <h5 className="mem_Role">{role}</h5>
        </div>

        <div className="mem_links">
          <Phone className="mem_icon"></Phone>
          <Mail className="mem_icon"></Mail>
          <Linkedin className="mem_icon"></Linkedin>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MemberCard;

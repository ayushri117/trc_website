import "./Resources.css";
import pcb from "../../assets/pcb.jpg";
import arduino from "../../assets/arduino.jpg";
import pi from "../../assets/pi.jpg";
import battery from "../../assets/battery.jpg";
import electronics from "../../assets/electronics.jpg";
import { FaGoogleDrive } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { motion } from "framer-motion";

const resourceVariants = {
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
      staggerChildren: 0.1,
    },
  },
};

const container = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Resources = () => {
  return (
    <motion.div
      className="card-container"
      variants={container}
      initial="hidden"
      animate="animate"
    >
      <motion.div
        className="card"
        variants={resourceVariants}
        // initial="hidden"
        // animate="animate"
      >
        <motion.img src={pcb} alt="Card" className="card-image" />
        <div className="card-content">
          <motion.h2 className="card-title">PCB Designing</motion.h2>
          <motion.p className="card-subtitle">
            some good resources to start with.
          </motion.p>
          <div className="icons-container">
            <FaGoogleDrive size={25} className="icons" />
            <AiOutlineLink size={25} className="icons" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="card"
        variants={resourceVariants}
        // initial="hidden"
        // animate="animate"
      >
        <img src={arduino} alt="Card" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">Arduino </h2>
          <p className="card-subtitle">some good resources to start with.</p>
          <div className="icons-container">
            <FaGoogleDrive size={25} className="icons" />
            <AiOutlineLink size={25} className="icons" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="card"
        variants={resourceVariants}
        // initial="hidden"
        // animate="animate"
      >
        <img src={pi} alt="Card" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">Raspberry Pi</h2>
          <p className="card-subtitle">Some good resources to start with.</p>
          <div className="icons-container">
            <FaGoogleDrive size={25} className="icons" />
            <AiOutlineLink size={25} className="icons" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="card"
        variants={resourceVariants}
        // initial="hidden"
        // animate="animate"
      >
        <img src={battery} alt="Card" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">Batteries</h2>
          <p className="card-subtitle">some good resources to start with.</p>
          <div className="icons-container">
            <FaGoogleDrive size={25} className="icons" />
            <AiOutlineLink size={25} className="icons" />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="card"
        variants={resourceVariants}
        // initial="hidden"
        // animate="animate"
      >
        <img src={electronics} alt="Card" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">Basic Electronics</h2>
          <p className="card-subtitle">some good resources to start with.</p>
          <div className="icons-container">
            <FaGoogleDrive size={25} className="icons" />
            <AiOutlineLink size={25} className="icons" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Resources;
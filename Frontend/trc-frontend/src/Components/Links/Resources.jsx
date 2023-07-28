import "./Resources.css";
import pcb from "../../assets/pcb.jpg";
import arduino from "../../assets/arduino.jpg";
import pi from "../../assets/pi.jpg";
import battery from "../../assets/battery.jpg";
import electronics from "../../assets/electronics.jpg";
import { FaGoogleDrive } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";
import {
  useLoaderData,
  redirect,
  json,
  Navigate,
  useNavigate,
} from "react-router-dom";
import axios from "axios";

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

const cardImage = {
  hover: {
    height: 200,
    transition: {
      duration: 0.8,
      ease: [0.43, 0.13, 0.23, 0.96],
    },
  },
};

// const content = {
//   hidden: {
//     height: 0,
//     opacity: 0,
//   },
//   hover: {
//     height: "100%",
//     opacity: 1,
//     transition: {
//       duration: 0.8,
//       ease: [0.43, 0.13, 0.23, 0.96],
//     },
//   },
// };

const Resources = () => {
  const data = useLoaderData();
  const navigate = useNavigate();
  return (
    <AnimatePresence>
      <motion.div
        className="card-container"
        variants={container}
        initial="hidden"
        animate="animate"
      >
        {data.map((item) => (
          <motion.div
            className="card"
            variants={resourceVariants}
            initial="hidden"
            animate="animate"
            whileHover="hover"
          >
            <motion.img
              src={item.image}
              alt="Card"
              className="card-image"
              variants={cardImage}
            />
            <motion.div className="card-content">
              <motion.h2 className="card-title">{item.heading}</motion.h2>
              <motion.p className="card-subtitle">{item.info}</motion.p>
              <div className="icons-container">
                <button onClick={() => navigate(`${item._id}`)}>Explore</button>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default Resources;

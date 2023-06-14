import React from "react";
import styles from "./Selector.module.css";
import blog from "../../assets/bg.jpeg";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';


const Selector = () => {

  
  return (
    <div className={styles.cardContainer}>
      <AnimatePresence>
        <motion.div className={styles.card } 
          initial={{ x: '90vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition:{duration:0.5, ease:"linear"} }}>
          <div className={styles.circle}> </div>
          <div className={styles.content}>
            <h2>Blogs</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odio
              dolorem quae molestiae nesciunt libero cupiditate nam, facere
              repellendus saepe sunt laudantium quibusdam voluptatibus
              necessitatibus provident maxime officiis nobis fugiat! Neque
              veritatis laborum corrupti voluptatem aperiam rerum at blanditiis
              perspiciatis dolores sint quas iste necessitatibus eius cumque,
              delectus harum dignissimos.
            </p>
            <NavLink to="/blog">Know More </NavLink>
          </div>
          <img src={blog} alt="blogs" />
        </motion.div>
      </AnimatePresence>  

      <AnimatePresence>
        <motion.div className={styles.card } 
          initial={{ x: '90vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition:{duration:0.6, ease:"linear"} }}>
          <div className={styles.circle}> </div>
          <div className={styles.content}>
            <h2>Tutorials</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odio
              dolorem quae molestiae nesciunt libero cupiditate nam, facere
              repellendus saepe sunt laudantium quibusdam voluptatibus
              necessitatibus provident maxime officiis nobis fugiat! Neque
              veritatis laborum corrupti voluptatem aperiam rerum at blanditiis
              perspiciatis dolores sint quas iste necessitatibus eius cumque,
              delectus harum dignissimos.
            </p>
            <NavLink to="/tutorial">Know More </NavLink>
          </div>
          <img src={blog} alt="blogs" />
        </motion.div>
      </AnimatePresence>    

      <AnimatePresence>
        <motion.div className={styles.card } 
          initial={{ x: '90vw', opacity: 0 }}
      animate={{ x: 0, opacity: 1, transition:{duration:0.7, ease:"linear"} }}>
          <div className={styles.circle}> </div>
          <div className={styles.content}>
            <h2>Lectures</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum odio
              dolorem quae molestiae nesciunt libero cupiditate nam, facere
              repellendus saepe sunt laudantium quibusdam voluptatibus
              necessitatibus provident maxime officiis nobis fugiat! Neque
              veritatis laborum corrupti voluptatem aperiam rerum at blanditiis
              perspiciatis dolores sint quas iste necessitatibus eius cumque,
              delectus harum dignissimos.
            </p>
            <NavLink to="/lecture">Know More </NavLink>
          </div>
          <img src={blog} alt="blogs" />
        </motion.div>
      </AnimatePresence>  
    </div>
  );
};

export default Selector;

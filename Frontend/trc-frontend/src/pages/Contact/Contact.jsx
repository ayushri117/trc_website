import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactPage = () => {
  const [lebelAnimation, setLabelAnimation] = useState("animate");
  const form = useRef();

  const Service_Id = import.meta.env.VITE_SERVICE_ID;
  const Template_Id = import.meta.env.VITE_TEMPLATE_ID;
  const Public_Key = import.meta.env.VITE_PUBLIC_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(Service_Id, Template_Id, form.current, Public_Key).then(
      (result) => {
        e.target.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  const labelAni = {
    initial: {
      y: 30,

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
    focus: {
      y: 0,
      opacity: 1,
      color: "#185ADD",
      transition: {
        ease: [0.6, 0.01, 0.05, 0.98],
        duration: 1.6,
      },
    },
  };
  return (
    <div className="Contact_Container">
      <motion.h1
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          transition: {
            ease: [0.6, 0.01, 0.05, 0.98],
            duration: 1.6,
          },
        }}
      >
        CONTACT US!
      </motion.h1>
      <form ref={form} onSubmit={sendEmail} className="Contact_form">
        <div className="Contact_Info">
          <div className="Info_item">
            <motion.label
              variants={labelAni}
              initial="initial"
              animate="animate"
              className="Contact_Label"
            >
              Name
            </motion.label>
            <motion.input
              type="text"
              name="from_name"
              initial={{ opacity: 0, width: 0, background: "#fff" }}
              animate={{
                width: "100%",
                opacity: 1,
                transition: {
                  duration: 1.6,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              }}
            />
          </div>
          <div className="Info_item">
            <motion.label
              variants={labelAni}
              initial="initial"
              animate="animate"
            >
              Email
            </motion.label>
            <motion.input
              type="email"
              name="user_email"
              initial={{ opacity: 0, width: 0, background: "#fff" }}
              animate={{
                width: "100%",
                opacity: 1,
                transition: {
                  duration: 1.6,
                  ease: [0.43, 0.13, 0.23, 0.96],
                },
              }}
            />
          </div>
        </div>
        <div className="Contact_Subject">
          <motion.label variants={labelAni} initial="initial" animate="animate">
            Subject
          </motion.label>
          <motion.input
            type="text"
            name="user_subject"
            initial={{ opacity: 0, width: "0%", background: "#fff" }}
            animate={{
              width: "100%",
              opacity: 1,
              transition: {
                duration: 1.6,
                ease: [0.43, 0.13, 0.23, 0.96],
              },
            }}
          />
        </div>
        <div className="Contact_Msg">
          <motion.label variants={labelAni} initial="initial" animate="animate">
            Message
          </motion.label>
          <motion.textarea
            name="message"
            className="Contact_textarea"
            initial={{ opacity: 0, width: 0, background: "#fff" }}
            animate={{
              width: "100%",
              opacity: 1,
              transition: {
                duration: 1.6,
                ease: [0.43, 0.13, 0.23, 0.96],
              },
            }}
          />
        </div>
        <motion.input type="submit" value="Send" className="Contact_Submit" />
      </form>
    </div>
  );
};

export default ContactPage;

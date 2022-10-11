import React from "react";
import github from "../images/github.svg";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import mail from "../images/mail.svg";
import twitter from "../images/twitter.svg";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      className="contact--body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="contact--container">
        <div className="contact--icons">
          <input className="contact--icon" type="image" src={github} />
          <input className="contact--icon" type="image" src={twitter} />
          <input className="contact--icon" type="image" src={instagram} />
          <input className="contact--icon" type="image" src={facebook} />
          <input className="contact--icon" type="image" src={mail} />
        </div>
        <div className="contact--info">
          Dog Store <br />
          Dog Street 42, San Perro USA
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;

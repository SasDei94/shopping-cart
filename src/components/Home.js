import React from "react";
import "../Home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="home--body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="home--container">
        <div className="quote">
          "THE BETTER I GET TO KNOW MEN, THE MORE I FIND MYSELF LOVING DOGS."{" "}
          <br />
          <div className="author">- Charles De Gaulle</div>
        </div>
        <Link className="button" to="/products">
          SHOP NOW
        </Link>
      </div>
    </motion.div>
  );
}

export default Home;

import React from "react";
import { useParams } from "react-router-dom";
import { dogs } from "./Dogs";
import { motion } from "framer-motion";

function DogInfo(props) {
  let { dogId } = useParams();
  return (
    <motion.div
      className="doginfo--body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="doginfo--container">
        <img
          src={require(`../images/${dogs[dogId].src}`)}
          className="dog--img"
        />
        <div className="doginfo">
          <div className="doginfo--name">{dogs[dogId].name}</div>
          <div className="doginfo--breed">{dogs[dogId].breed}</div>
          <div className="doginfo--price">$ {dogs[dogId].price}</div>
          <div className="doginfo--description">
            <span style={{ fontWeight: "bold" }}>
              About {dogs[dogId].name}:
            </span>{" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </div>
          <button onClick={props.handleAddItem} id={dogId} className="addCart">
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default DogInfo;

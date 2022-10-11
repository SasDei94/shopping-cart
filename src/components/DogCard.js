import React from "react";
import { Link } from "react-router-dom";

function DogCard(props) {
  return (
    <Link to={props.goal} className="dog--card">
      <img
        className="dog--img"
        src={require(`../images/${props.src}`)}
        alt="dominant color placeholder"
      />
      <div className="dog--name">{props.name}</div>
      <div className="dog--breed">{props.breed}</div>
      <div className="dog--price">$ {props.price}</div>
    </Link>
  );
}

export default DogCard;

import React from "react";

function ShoppingCartItem(props) {
  return (
    <div className="cart--item">
      <img
        className="cart--img"
        src={require(`../images/${props.src}`)}
        alt="dominant color placeholder"
      />
      <div className="left--side">
        <div className="cart--name">{props.name}</div>
        <div className="cart--breed">{props.breed}</div>
      </div>
      <div className="cart--price">$ {props.price}</div>
      <div className="cart--quantity">
        <button
          onClick={props.decreaseQuantity}
          id={props.id}
          className="cart--button"
        >
          -
        </button>

        <div className="cart--count">{props.quantity}</div>
        <button
          onClick={props.increaseQuantity}
          id={props.id}
          className="cart--button"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ShoppingCartItem;

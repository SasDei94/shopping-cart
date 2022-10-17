import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function ShoppingCart(props) {
  const items = props.cart;

  const listedItems = items.map((item) => (
    <ShoppingCartItem
      src={item.src}
      name={item.name}
      breed={item.breed}
      price={item.price * item.quantity}
      quantity={item.quantity}
      id={item.id}
      increaseQuantity={props.increaseQuantity}
      decreaseQuantity={props.decreaseQuantity}
      key={item.id}
    />
  ));

  return (
    <motion.div
      className="shoppingCart--body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="shoppingCart--container">
        <div className="shoppingCart--title">YOUR CART</div>
        {items.length === 0 ? (
          <div className="shoppingCart--empty">
            There are no dogs in your Shopping Cart
          </div>
        ) : (
          listedItems
        )}
        <div className="cart--total">Total: {props.total}</div>
        <Link onClick={props.isShown} className="cart--checkout" to="/shipped">
          Checkout
        </Link>
      </div>
    </motion.div>
  );
}

export default ShoppingCart;

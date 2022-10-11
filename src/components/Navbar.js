import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar(props) {
  return (
    <div>
      <nav className="navbar">
        <Link className="title" to="/home">
          DOG STORE
        </Link>
        <Link className="products" to="/products">
          OUR DOGS
        </Link>
        <Link className="contact" to="/contact">
          CONTACT
        </Link>
        <Link className="cart" to="/shopping-cart">
          SHOPPING CART ({props.cart})
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Navbar;

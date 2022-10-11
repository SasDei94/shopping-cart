import React from "react";
import DogCard from "./DogCard";
import { dogs } from "./Dogs";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

function Products(props) {
  const dogCards = dogs.map((dog) => (
    <DogCard
      src={dog.src}
      name={dog.name}
      breed={dog.breed}
      price={dog.price}
      key={dog.id}
      id={dog.id}
      goal={`/products/${dog.id}`}
    />
  ));

  return (
    <motion.div
      className="products--body"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="products--title">OUR DOGS</div>
      <div className="products--container">{dogCards}</div>
      <Outlet />
    </motion.div>
  );
}

export default Products;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import DogInfo from "./DogInfo";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const RouteSwitch = (props) => {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/" element={<Products />} />
            <Route
              path="/products/:dogId"
              element={<DogInfo handleAddItem={props.handleAddItem} />}
            />
            <Route path="/shopping-cart" element={<ShoppingCart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default RouteSwitch;

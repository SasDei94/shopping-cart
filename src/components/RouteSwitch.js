import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Products from "./Products";
import ShoppingCart from "./ShoppingCart";
import DogInfo from "./DogInfo";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";
import Shipment from "./Shipment";

const RouteSwitch = (props) => {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar cartLength={props.cartLength} />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shipped" element={<Shipment />} />
            <Route path="/products" element={<Products />} />
            <Route
              path="/products/:dogId"
              element={<DogInfo handleAddItem={props.handleAddItem} />}
            />
            <Route
              path="/shopping-cart"
              element={
                <ShoppingCart
                  cart={props.cart}
                  increaseQuantity={props.increaseQuantity}
                  decreaseQuantity={props.decreaseQuantity}
                  total={props.total}
                  showShipment={props.showShipment}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
};

export default RouteSwitch;

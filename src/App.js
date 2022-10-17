import { useEffect, useState } from "react";
import RouteSwitch from "./components/RouteSwitch";
import { dogs } from "./components/Dogs";
import Shipment from "./components/Shipment";

function App() {
  const [shoppingCart, setShoppingCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState(0);
  const [shipment, setShipment] = useState(false);

  useEffect(() => {
    setTotal(
      shoppingCart.reduce((acc, obj) => {
        return acc + obj.price * obj.quantity;
      }, 0)
    );
    setItems(
      shoppingCart.reduce((acc, obj) => {
        return acc + obj.quantity;
      }, 0)
    );
  }, [shoppingCart]);

  function addItem(event) {
    if (shoppingCart.some((item) => item.name === event.target.name)) {
      setShoppingCart((prevCart) =>
        prevCart.map((item) => {
          if (event.target.name === item.name) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          } else {
            return item;
          }
        })
      );
    } else {
      setShoppingCart((prevCart) => [
        ...prevCart,
        { ...dogs[event.target.id], id: shoppingCart.length, quantity: 1 },
      ]);
    }
  }

  function increaseQuantity(event) {
    setShoppingCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id == event.target.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        } else {
          return item;
        }
      })
    );
  }

  function decreaseQuantity(event) {
    setShoppingCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id == event.target.id) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          } else {
            return item;
          }
        })
        .filter((item) => item.quantity > 0)
    );
  }

  function shipItems() {
    setShipment((prevState) => !prevState);
  }

  return (
    <div className="App">
      <RouteSwitch
        handleAddItem={addItem}
        cart={shoppingCart}
        cartLength={items}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        total={total}
        showShipment={shipItems}
      />
      {shipment && <Shipment />}
    </div>
  );
}

export default App;

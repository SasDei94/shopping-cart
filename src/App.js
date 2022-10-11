import { useState } from "react";
import RouteSwitch from "./components/RouteSwitch";
import { dogs } from "./components/Dogs";

function App(props) {
  const [shoppingCart, setShoppingCart] = useState([]);

  function addItem(event) {
    setShoppingCart((prevCart) => [...prevCart, dogs[event.target.id]]);
  }

  console.log(shoppingCart);

  return (
    <div className="App">
      <RouteSwitch handleAddItem={addItem} />
    </div>
  );
}

export default App;

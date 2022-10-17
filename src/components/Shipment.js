import React from "react";

function Shipment() {
  return (
    <div className="shipment--box">
      <img className="shipment--img" src={require("../images/shipment.jpg")} />
      <div className="shiptment--msg">Your dogs are on their way to you!</div>
    </div>
  );
}

export default Shipment;

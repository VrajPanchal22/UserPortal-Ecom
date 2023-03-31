import React from "react";

function CardProdPrice({ price, size, color }) {
  return (
    <div className="wishlist__product-price">
      <b>price : ₹ {price}</b>
      <p className="mb-0">size : {size} </p>
      <p>color : {color} </p>
      {/* <div className="wishlist__discount text-success">{off} OFF</div> */}
    </div>
  );
}

export default CardProdPrice;

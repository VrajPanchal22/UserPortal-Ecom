import React from "react";
// import { FaRegHeart } from "react-icons/fa";

function CardBrand({ brand, name }) {
  return (
    <div className="d-flex justify-content-between mt-2">
      <h5 className="wishlist__brand-name">{brand}</h5>
      <h5 className="wishlist__brand-name">{name}</h5>
      {/* <FaRegHeart className="wishlist-icon" /> */}
    </div>
  );
}

export default CardBrand;

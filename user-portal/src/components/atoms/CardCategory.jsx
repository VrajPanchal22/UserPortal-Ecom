import React from "react";

function CardCategory({ category }) {
  return (
    <div className="wishlist__category d-flex">
      <div className="wishlist__category-gender">{category}</div>
    </div>
  );
}

export default CardCategory;

import React from "react";
import CardBrand from "../atoms/CardBrand";
import CardCategory from "../atoms/CardCategory";
import CardProdPrice from "../atoms/CardProdPrice";
import CardBtn from "../atoms/CardBtn";

function Card({ product, onDelete }) {
  // console.log("array", product.productId);
  console.log("Product", product) 
  return (
    <div
      className="wishlist__card-div col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6 mb-3 d-flex justify-content-center align-items-center"
      id={product._id}
    >
      <div className="card wishlist__card--secondary ">
        <img
          src={product.selectedVarient[0].images[0]}
          className="wishlist__card-img"
          alt="image"
        />

        <div className="wishlist__prod-details ml-1 p-3">
          <CardBrand brand={product.brand} name={product.name} />
          <CardCategory category={product.category} />
          <CardProdPrice
            price={product.selectedVarient[0].price}
            size={product.selectedVarient[0].size}
            color={product.selectedVarient[0].color}
          />
          <CardBtn onClick={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default Card;

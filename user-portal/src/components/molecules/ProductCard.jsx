import React, { useContext } from "react";
import { FaRegHeart } from "react-icons/fa";
import productGallaryContext from "../../contexts/productGallary";

function ProductCard({ product, onClick }) {
  const { viewOption } = useContext(productGallaryContext);
  return (
    <div
      className={`${
        viewOption === "list"
          ? "col-12 m-2"
          : " col-xl-3 col-lg-4 col-md-6 col-6 d-flex justify-content-center align-items-center mt-2"
      } card-div`}
      id={product._id}
      onClick={onClick}
    >
      <div
        className={`${
          viewOption === "list"
            ? "flex-row justify-content-around card--listview"
            : "card--gridview"
        } card card-product p-2 d-flex align-items-center`}
        style={{ cursor: "pointer" }}
      >
        <img
          className={`${
            viewOption === "list"
              ? "card__img--width m-2"
              : "card-img-top card__img"
          }`}
          src={product.image}
          alt="Card image cap"
        />
        <div
          className={`${
            viewOption === "list" ? "w-50" : "product-details mt-2"
          }`}
        >
          <div
            className={`${
              viewOption === "list" ? "" : " justify-content-between"
            } justify-content-between d-flex mt-2`}
          >
            <h5 className="product-brand">{product.name}</h5>
            <FaRegHeart className="wishlist-icon" />
          </div>
          <div className="d-flex" style={{ height: "1.3rem" }}>
            <div className="product-gender">{product.brand}</div>
          </div>
          <div className="product-price">
            <b>Rs.{product?.variants[0]?.price}</b>
          </div>
          <div className="alertSection"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

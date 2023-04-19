import React from "react";
import ImgTag from "../atoms/ImgTag";
function ProductAdressCard({ product, variant }) {
  console.log("product", product);
  console.log("varient-------", variant);
  console.log("selected varients", product.selectedVariants[0].images[0]);
  return (
    <div className="d-flex align-items-center mt-3 mb-4">
      <ImgTag
        imgUrl={variant?.images[0]}
        className="address-product-img"
        altText="image"
      />
      <div className="d-flex flex-column w-100">
        <div
          className="product-name ml-3"
          data-toggle="tooltip"
          data-placement="top"
          title="name"
        >
          {product.name}
        </div>

        <div className="fs-8 font-weight-bold text-success ml-3">
          price : ₹ {product.selectedVariants[0].price}
        </div>
        <span className="fs-9 ml-3">
          Qty:{" "}
          <span className="font-weight-bold">
            {product.selectedVariants[0].quantity}
          </span>
        </span>
      </div>
    </div>
  );
}

export default ProductAdressCard;

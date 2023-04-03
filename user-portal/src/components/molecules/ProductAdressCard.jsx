import React from "react";
import ImgTag from "../atoms/ImgTag";
function ProductAdressCard() {
  return (
    <div className="d-flex align-items-center mt-3 mb-4">
      <ImgTag
        imgUrl="/assets/images/Tshirt1.jpg"
        className="product-img"
        altText="image"
      />
      <div className="d-flex flex-column w-100">
        <div
          className="product-name ml-3"
          data-toggle="tooltip"
          data-placement="top"
          title="name"
        >
          name Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit
          amet consectetur.
        </div>

        <div className="fs-8 font-weight-bold text-success ml-3">₹2000</div>
        <span className="fs-9 ml-3">
          Qty: <span className="font-weight-bold">1</span>
        </span>
      </div>
    </div>
  );
}

export default ProductAdressCard;

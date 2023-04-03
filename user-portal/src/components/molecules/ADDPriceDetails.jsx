import React from "react";

function ADDPriceDetails() {
  return (
    <div className="mt-2">
      <div className="fs-8 font-weight-bold mb-3">PRICE DETAILS (2 items)</div>
      {/* <!-- price labels --> */}
      <div className="d-flex justify-content-between align-items-center fs-7 text-secondary my-2">
        <div className="">Total MRP</div>
        <div className="">₹4,798</div>
      </div>
      <div className="d-flex justify-content-between align-items-center fs-7 text-secondary my-2">
        <div className="">Discount on MRP</div>
        <div className="text-success">-₹2,210</div>
      </div>
      <div className="d-flex justify-content-between align-items-center fs-7 text-secondary my-2">
        <div className="">Convenience Fees</div>
        <div className="">
          <span className="td-line-through">₹99</span>{" "}
          <span className="text-success">FREE</span>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center fs-7 font-weight-bold text-drak-gray my-2 border-top py-3">
        <div className="">Total Amount</div>
        <div className="">₹2,588</div>
      </div>
    </div>
  );
}

export default ADDPriceDetails;

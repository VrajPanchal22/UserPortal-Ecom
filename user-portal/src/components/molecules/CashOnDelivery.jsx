import React from "react";
import { useState } from "react";
import OrderPlaced from "./OrderPlaced";
import { useNavigate } from "react-router-dom";
import ImgTag from "../atoms/ImgTag";
function CashOnDelivery() {
  const navigate = useNavigate();
  function handlePlaceOrder() {
    console.log("clicked");
    if (localStorage.getItem("selectedAddress")) {
      navigate("/order-placed");
    } else {
      alert("no address added");
    }
  }

  return (
    <div id="cashOnDelivery" className="m-3">
      <div className="fs-7 font-weight-bold pt-1">
        Pay on delivery(Cash/UPI)
      </div>

      <div className="captcha-image d-flex flex-row align-items-center my-4">
        <div className="border border-secondary rounded">
          <ImgTag imgUrl="assets/images/randNo.png" altText="random Number" />
        </div>
        <div className="fs-8 font-weight-bold ml-4">
          <span>change Image</span>
        </div>
      </div>

      <div className="border rounded p-1">
        <input
          className="w-100 border-0 p-2 fs-8"
          type="text"
          name="randCode"
          id="randCode"
          placeholder="Enter code shown in above image*"
        />
      </div>

      <div className="fs-10 my-2">
        You can pay via Cash or UPI enabled app at the time of delivery. Ask
        your delivery executive for these options.
      </div>

      <button
        type="button"
        className="btn btn-block font-weight-bold btn-sm text-white py-2 my-4 bg-pink"
        onClick={handlePlaceOrder}
      >
        PLACE ORDER
      </button>
    </div>
  );
}

export default CashOnDelivery;

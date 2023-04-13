import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import cartContext from "../../contexts/cartContext";
// import { useNavigate } from "react-router-dom";

const tempId = sessionStorage.getItem("tempUserId");
const userData = JSON.parse(localStorage.getItem("userData"));

export default function CartOrderDetails() {
  const token = localStorage.getItem("token");

  const { cartData, fetchData } = useContext(cartContext);

  const navigate = useNavigate();

  const handleCheckout = () => {
    if (token) {
      navigate("/address");
    } else {
      localStorage.setItem("path", "/payment");
      navigate("/login");
    }
  };

  const getCartTotal = (cartData) =>
    cartData.reduce((acc, curr) => {
      const selectedVariants = curr.selectedVariants;
      for (let i = 0; i < selectedVariants.length; i++) {
        const variant = selectedVariants[i];
        acc += variant.price * variant.quantity;
      }
      return acc;
    }, 0);

  return (
    <>
      <div className="order-details container-fuild border bg-white  p-2">
        <div className="m-2 font-weight-bold fs-6">Order Details</div>
        <div className="m-2 d-flex justify-content-between">
          <div className="fs-7">Cart Total</div>
          <CurrencyFormat
            renderText={(value) => (
              <div className="cart-total font-weight-bold fs-7">{value}</div>
            )}
            decimalScale={2}
            value={getCartTotal(cartData)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </div>
        {/* <div className="m-2 d-flex justify-content-between">
          <div className="fs-7">Cart Discount:</div>
          <div className="order-details__cart-discount  fs-7 font-weight-bold ">
            -₹1,398.00
          </div>
        </div> */}
        <div className="m-2 d-flex justify-content-between">
          <div className="fs-7">Delivery Fee:</div>
          <div className="order-details__delivery-fee">
            {" "}
            <span className="fs-7 font-weight-bold">Free</span>
            <span className="text-decoration-line-through fs-7 font-weight-bold">
              ₹99.00
            </span>
          </div>
        </div>
        <div className="m-4 d-flex justify-content-center">
          <button
            type="button"
            className="order-details__shipping-btn btn btn-md font-weight-bold"
            onClick={() => handleCheckout()}
          >
            PROCESS TO SHPPING
          </button>
        </div>
      </div>
    </>
  );
}

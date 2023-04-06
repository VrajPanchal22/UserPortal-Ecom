import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import BetterBuyLogo from "../atoms/BetterBuyLogo";

function PaymentHeader() {
  const navigate = useNavigate();
  const [headers, setHeaders] = useState({
    isOutOfCart: getLocalStorageDataByKey("isOutOfCart", true),
    isAddressSelected: getLocalStorageDataByKey("isAddressSelected", false),
    isPaymentDone: getLocalStorageDataByKey("isPaymentDone", false),
  });

  function getLocalStorageDataByKey(key, defaultValue = undefined) {
    let data = localStorage.getItem(key);

    if (data) {
      try {
        return JSON.parse(data);
      } catch (error) {
        return data;
      }
    } else {
      return defaultValue;
    }
  }

  function navigatePayment() {
    navigate("/address");
  }
  return (
    <header className="header-payment row d-flex justify-content-center align-items-center px-5 py-4 font-weight-bold border-bottom">
      <BetterBuyLogo />
      <div className="header-payment__tags w-50 d-flex justify-content-between text-center">
        <Link id="header-cartTag" to="/cart" className="header-payment__tag">
          <img
            className="header-payment__image"
            src={`assets/images/${
              !headers.isOutOfCart ? "edit-icon.svg" : "tick-icon.svg"
            }`}
            alt="1"
            srcSet=""
          />
          CART
        </Link>

        <a
          id="header-addressTag"
          href="/address"
          className="header-payment__tag "
        >
          <img
            className="header-payment__image"
            src={`assets/images/${
              !headers.isOutOfCart && !headers.isAddressSelected
                ? "2.png"
                : headers.isOutOfCart && !headers.isAddressSelected
                ? "edit-icon.svg"
                : headers.isOutOfCart
                ? "tick-icon.svg"
                : "2.png"
            }`}
            alt="1"
            srcSet=""
          />
          ADDRESS
        </a>

        <a
          id="header-paymentTag"
          href="#"
          className="header-payment__tag tag--disabled"
        >
          <img
            className="header-payment__image"
            src={`assets/images/${
              headers.isOutOfCart &&
              !headers.isAddressSelected &&
              !headers.isPaymentDone
                ? "3.png"
                : headers.isOutOfCart &&
                  headers.isAddressSelected &&
                  !headers.isPaymentDone
                ? "edit-icon.svg"
                : headers.isOutOfCart && headers.isAddressSelected
                ? "tick-icon.svg"
                : "3.png"
            }`}
            alt="1"
            srcSet=""
          />
          PAYMENT
        </a>
      </div>
    </header>
  );
}

export default PaymentHeader;

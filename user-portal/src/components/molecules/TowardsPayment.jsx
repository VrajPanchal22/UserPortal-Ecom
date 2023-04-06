import React from "react";
import { useEffect } from "react";
import ProductAdressCard from "../molecules/ProductAdressCard";
import ADDPriceDetails from "../molecules/ADDPriceDetails";
import Button from "../atoms/Button";
function TowardsPayment() {
  // const userData = JSON.parse(localStorage.getItem("userData"));
  // useEffect(() => {
  //   getData(`cart/${userData ? userData._id : ""}`).then((res) => {
  //
  //   });
  // }, []);
  return (
    <>
      <div className="">
        <div className="payment-cards">
          <ProductAdressCard />
          <ProductAdressCard />
          <ProductAdressCard />
          <ProductAdressCard />
        </div>
      </div>
      <ADDPriceDetails />
    </>
  );
}

export default TowardsPayment;

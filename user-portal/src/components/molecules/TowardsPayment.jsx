import React from "react";
import ProductAdressCard from "../molecules/ProductAdressCard";
import ADDPriceDetails from "../molecules/ADDPriceDetails";
import Button from "../atoms/Button";
function TowardsPayment() {
  return (
    <>
      <div className="">
        <ProductAdressCard />
        <ProductAdressCard />
      </div>
      <ADDPriceDetails />
    </>
  );
}

export default TowardsPayment;

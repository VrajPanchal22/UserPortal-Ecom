import React from "react";
import PaymentHeader from "../molecules/PaymentHeader";
import { useEffect } from "react";
import TowardsPayment from "../molecules/TowardsPayment";
import { useState } from "react";
import PaymentGatewayCards from "../molecules/PaymentGatewayCards";
import DeliveryAddress from "../molecules/DeliveryAddress";
import PaymentMode from "../molecules/PaymentMode";
function PaymentProc() {
  const [selectedAddress, setSelectedAddress] = useState(null);
  console.log("selected address==", selectedAddress);
  const handleSelectAddress = (addressData) => {
    setSelectedAddress(addressData);
  };
  useEffect(() => {
    const storedAddress = localStorage.getItem("selectedAddress");
    setSelectedAddress(JSON.parse(storedAddress));
  }, []);

  localStorage.setItem("isPaymentDone", false);

  return (
    <div className="container-fluid bg-white container-payment">
      <PaymentHeader />
      <main className="row container mx-auto main-container-payment">
        <div className="col-lg-8 main-left-container-payment p-4 bg-white mt-4 ">
          <DeliveryAddress selectedAddress={selectedAddress} />
          <PaymentMode selectedAddress={selectedAddress} />
        </div>
        <div className="col-lg-4 ">
          <div className="card px-2 py-3 mt-4">
            <TowardsPayment />
          </div>
        </div>
      </main>
      <PaymentGatewayCards />
    </div>
  );
}

export default PaymentProc;

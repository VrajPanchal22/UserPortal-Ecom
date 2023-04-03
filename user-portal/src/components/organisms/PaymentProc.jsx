import React from "react";
import PaymentHeader from "../molecules/PaymentHeader";
import TowardsPayment from "../molecules/TowardsPayment";
import PaymentGatewayCards from "../molecules/PaymentGatewayCards";
import DeliveryAddress from "../molecules/DeliveryAddress";
import PaymentMode from "../molecules/PaymentMode";
function PaymentProc() {
  return (
    <div className="container-fluid bg-white container-payment">
      <PaymentHeader />
      <main className="row container mx-auto main-container-payment">
        <div className="col-lg-8 main-left-container-payment p-4 bg-white mt-4 ">
          <DeliveryAddress />
          <PaymentMode />
        </div>
        <div className="col-lg-4 px-0">
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

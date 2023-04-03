import React, { useState } from "react";
import CashOnDelivery from "./CashOnDelivery";
import CreditDebit from "./CreditDebit";
import UPIPayment from "./UPIPayment";
import NetbankingPayment from "./NetbankingPayment";
function PaymentMode() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("cashOnDelivery");

  function handlePaymentMethodClick(id) {
    console.log("id", id);
    setSelectedPaymentMethod(id);
    // if (id === "cashOnDelivery") {
    //   setSelectedPaymentMethod(<CashOnDelivery />);
    // } else if (id === "cardDetails") {
    //   setSelectedPaymentMethod(<CreditDebit />);
    // } else if (id === "phonePeGpayPaytm") {
    //   setSelectedPaymentMethod(<UPIPayment />);
    // } else if (id === "netBanking") {
    //   setSelectedPaymentMethod(<NetbankingPayment />);
    // }

    // if (id === "cashOnDelivary") {
    //   setSelectedComponent(<CashOnDelivery />);
    // } else if (id === "cardDetails") {
    //   setSelectedComponent(<CreditDebit />);
    // } else if (id === "phonePeGpayPaytm") {
    //   setSelectedComponent(<UPIPayment />);
    // } else if (id === "netBanking") {
    //   setSelectedComponent(<NetbankingPayment />);
    // }
  }

  return (
    <>
      <div className="fs-8 font-weight-bold my-3">Choose Payment Mode</div>
      <div className="row border rounded mx-1 bg-white">
        <div className="payment-methods col-lg-4 col-md-4 px-0">
          {/* <!-- cash on delivery --> */}
          <div
            id="cashOnDeliveryText"
            className={`px-3 py-3 fs-7 font-weight-bold border-bottom border-right ${
              selectedPaymentMethod === "cashOnDelivery"
                ? "payment-selected"
                : ""
            }`}
            onClick={() => handlePaymentMethodClick("cashOnDelivery")}
          >
            Cash On Delivary
          </div>

          {/* <!-- credit & debit cards payment --> */}
          <div
            id="cardDetailsText"
            className={`px-3 py-3 fs-7 font-weight-bold border-bottom border-right ${
              selectedPaymentMethod === "cardDetails" ? "payment-selected" : ""
            }`}
            onClick={() => handlePaymentMethodClick("cardDetails")}
          >
            Credit/Debit Cards
          </div>

          {/* <!-- UPI payment --> */}
          <div
            id="UPIText"
            className={`px-3 py-3 fs-7 font-weight-bold border-bottom border-right ${
              selectedPaymentMethod === "phonePeGpayPaytm"
                ? "payment-selected"
                : ""
            }`}
            onClick={() => handlePaymentMethodClick("phonePeGpayPaytm")}
          >
            UPI
          </div>
          {/* <!-- Net Banking --> */}
          <div
            id="netBankingText"
            className={`px-3 py-3 fs-7 font-weight-bold border-bottom border-right ${
              selectedPaymentMethod === "netBanking" ? "payment-selected" : ""
            }`}
            onClick={() => handlePaymentMethodClick("netBanking")}
          >
            Net Banking
          </div>
        </div>
        {/* {selectedPaymentMethod} */}
        <div className="col-lg-8 col-md-8 bg-white">
          {selectedPaymentMethod === "cashOnDelivery" ? <CashOnDelivery /> : ""}
          {selectedPaymentMethod === "cardDetails" ? <CreditDebit /> : ""}
          {selectedPaymentMethod === "phonePeGpayPaytm" ? <UPIPayment /> : ""}
          {selectedPaymentMethod === "netBanking" ? <NetbankingPayment /> : ""}
        </div>
      </div>
    </>
  );
}

export default PaymentMode;

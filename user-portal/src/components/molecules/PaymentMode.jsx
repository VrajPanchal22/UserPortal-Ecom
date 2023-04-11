import React, { useState } from "react";
import CashOnDelivery from "./CashOnDelivery";
import CreditDebit from "./CreditDebit";
import UPIPayment from "./UPIPayment";
import NetbankingPayment from "./NetbankingPayment";
function PaymentMode({ cartData, totalAmount, deliveryCharge }) {
  const [selectedPaymentMethod, setSelectedPaymentMethod] =
    useState("cashOnDelivery");

  function handlePaymentMethodClick(id) {
    setSelectedPaymentMethod(id);
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
          {selectedPaymentMethod === "cashOnDelivery" ? (
            <CashOnDelivery
              cartData={cartData}
              totalAmount={totalAmount}
              deliveryCharge={deliveryCharge}
            />
          ) : (
            ""
          )}
          {selectedPaymentMethod === "cardDetails" ? <CreditDebit /> : ""}
          {selectedPaymentMethod === "phonePeGpayPaytm" ? <UPIPayment /> : ""}
          {selectedPaymentMethod === "netBanking" ? <NetbankingPayment /> : ""}
        </div>
      </div>
    </>
  );
}

export default PaymentMode;

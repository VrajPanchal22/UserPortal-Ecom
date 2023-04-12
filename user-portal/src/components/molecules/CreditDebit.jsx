import React from "react";
import Button from "../atoms/Button";
function CreditDebit() {
  return (
    <div id="cardDetails" className="m-3 ">
      <div className="fs-7 font-weight-bold pt-1">CREDIT/DEBIT CARD</div>

      <div className="fs-8 text-secondary my-2">
        Please ensure your card can be used for online transactions.
      </div>

      <div className="border rounded p-1 mt-4">
        <input
          className="w-100 border-0 p-2 fs-8"
          type="text"
          name="cardNo"
          id="cardNo"
          placeholder="Card Number"
        />
      </div>

      <div className="border rounded p-1 mt-4">
        <input
          className="w-100 border-0 p-2 fs-8"
          type="text"
          name="cardHolderName"
          id="cardHolderName"
          placeholder="Card Holder Name"
        />
      </div>

      <div className="d-flex">
        <div className="border w-60 mr-2 rounded p-1 mt-4">
          <input
            className="w-100 border-0 p-2 fs-8"
            type="text"
            name="validity"
            id="validity"
            placeholder="Valid Thru (MM/YY)"
          />
        </div>

        <div className="border w-40 ml-2 rounded p-1 mt-4">
          <input
            className="w-100 border-0 p-2 fs-8"
            type="text"
            name="cvvNo"
            id="cvvNo"
            placeholder="CVV"
          />
        </div>
      </div>
      <Button
        className="btn btn-block font-weight-bold btn-sm text-white py-3 mt-5 bg-pink"
        buttonText="PAY NOW"
        type="button"
      />
    </div>
  );
}

export default CreditDebit;

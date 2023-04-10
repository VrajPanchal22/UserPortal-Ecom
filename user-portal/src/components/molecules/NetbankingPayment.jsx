import React from "react";
import Button from "../atoms/Button";
function NetbankingPayment() {
  return (
    <div id="netBanking" className="m-3 ">
      <div className="fs-7 font-weight-bold pt-1">Net Banking</div>

      <div className="fs-8 text-secondary my-2">
        Pay instantly from your bank using Net Banking.
      </div>

      <select className="custom-select my-4">
        <option value="default" disabled>
          Select Bank
        </option>
        <option value="axis">Axis Bank</option>
        <option value="hdfc">HDFC Bank</option>
        <option value="icici">ICICI Bank</option>
        <option value="kotak">Kotak</option>
        <option value="sbi">SBI</option>
      </select>

      <Button
        className="btn btn-block font-weight-bold btn-sm text-white py-2 mt-3 bg-pink"
        buttonText="PAY NOW"
      />
    </div>
  );
}

export default NetbankingPayment;

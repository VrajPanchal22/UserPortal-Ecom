import React from "react";
import Button from "../atoms/Button";
function UPIPayment() {
  return (
    <div id="phonePeGpayPaytm" className="m-3 ">
      <div className="fs-7 font-weight-bold pt-1">Enter your UPI ID</div>

      <div className="fs-8 text-secondary my-2">
        Pay instantly from your bank using your UPI ID.
      </div>

      <div className="border rounded p-1 mt-4">
        <input
          className="w-100 border-0 p-2 fs-8"
          type="text"
          name="upiId"
          id="upiId"
          placeholder="1234567890@upi"
        />
      </div>
      <Button
        className="btn btn-block font-weight-bold btn-sm text-white py-2 mt-4 bg-pink"
        type="button"
        buttonText="PAY NOW"
      />
    </div>
  );
}

export default UPIPayment;

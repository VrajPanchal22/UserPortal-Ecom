import React from "react";
import { useNavigate } from "react-router-dom";
function DeliveryAddress({ selectedAddress }) {
  const navigate = useNavigate();
  function changeAddress() {
    navigate("/address");
  }
  return (
    <>
      <div id="deliveryAddress">
        {/* <!-- selected address --> */}
        <div className="d-flex justify-content-between border rounded p-3 bg-white box-shadow">
          <div className="fs-8 text-secondary">
            {selectedAddress ? (
              <>
                <div className="">
                  Deliver to: {selectedAddress?.name},{" "}
                  {selectedAddress?.pincode}
                </div>
                <div className="">
                  {" "}
                  {selectedAddress?.street +
                    ", " +
                    selectedAddress?.locality}{" "}
                </div>
              </>
            ) : (
              <div> no address selected</div>
            )}
          </div>

          <div className="fs-8 mt-1">
            <button
              type="button"
              onClick={changeAddress}
              className="btn btn-outline-pink bg-pink fs-10 font-weight-bold text-drak-gray"
            >
              CHANGE ADDRESS
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeliveryAddress;

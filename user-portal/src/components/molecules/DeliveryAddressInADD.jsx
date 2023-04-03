import React from "react";
import { useState } from "react";
import AddressModel from "./AddressModel";
import AddressCard from "./AddressCard";
function DeliveryAddressInADD({
  toggle,
  addresses,
  removeAddress,
  setAddresses,
}) {
  // const [showModel, setShowModel] = useState(false);
  // function toggle() {
  //   setShowModel(!showModel);
  // }
  const addAddress = (address) => {
    setAddresses([...addresses, address]);
  };

  return (
    <>
      <div className="col-lg-8 main-left-container-payment p-4">
        <span className="fs-5 font-weight-bold text-drak-gray d-inline-block my-1">
          Select Delivery Address
        </span>

        <div id="addresses" className="row">
          {addresses.map((address) => (
            <AddressCard
              key={address.id}
              formData={address}
              onRemove={removeAddress}
            />
          ))}
        </div>

        <div
          className="card-body my-2 py-4 rounded border-danger"
          onClick={() => toggle()}
        >
          <span className="fs-6 font-weight-bold">+ Add New Address</span>
        </div>
      </div>
      {/* {showModel && <AddressModel toggle={toggle} />} */}
    </>
  );
}

export default DeliveryAddressInADD;

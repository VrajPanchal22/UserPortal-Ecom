import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getData } from "../../services/api";
import AddressModel from "./AddressModel";
import AddressCard from "./AddressCard";
import { deleteData } from "../../services/api";
function DeliveryAddressInADD({ toggle, setSelectedAddress, addresseFrom }) {
  const [addresses, setAddresses] = useState([]);

  const userData = JSON.parse(localStorage.getItem("userData"));
  useEffect(() => {
    getData(`address/${userData ? userData._id : ""}`).then((res) => {
      setAddresses(res.data);
    });
  }, [addresseFrom]);

  const handleSelectAddress = (addressData) => {
    setSelectedAddress(addressData);
  };
  async function handleRemove(address) {
    try {
      const res = await deleteData(
        `address/${userData ? userData._id : ""}/${address._id}`
      );
      if (res.status === true) {
        setAddresses(addresses.filter((A) => A._id !== address._id));
      }
    } catch (error) {
      error(error.message);
    }
  }

  return (
    <>
      <div className="col-lg-8 main-left-container-payment p-4">
        <span className="fs-5 font-weight-bold text-drak-gray d-inline-block my-1">
          Select Delivery Address
        </span>

        <div id="addresses" className="row">
          {addresses.map((address) => (
            <AddressCard
              key={address._id}
              data={address}
              onSelect={handleSelectAddress}
              onDelete={() => handleRemove(address)}
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

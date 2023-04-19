import React from "react";
import { useNavigate } from "react-router-dom";
import DeliveryAddressInADD from "../molecules/DeliveryAddressInADD";
import { useState } from "react";
import TowardsPayment from "../molecules/TowardsPayment";
import { useEffect } from "react";
import PaymentHeader from "../molecules/PaymentHeader";
import PaymentGatewayCards from "../molecules/PaymentGatewayCards";
import Button from "../atoms/Button";
import { postData } from "../../services/api";
import AddressModel from "../molecules/AddressModel";
function AddAddress() {
  const navigate = useNavigate();

  localStorage.setItem("isAddressSelected", false);

  const [showModel, setShowModel] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);

  console.log("showmodel ----", showModel);
  function toggle() {
    setShowModel(!showModel);
    console.log("showmodel from toggle func", showModel);
  }
  console.log("selected address", selectedAddress);
  function navigateToPayment() {
    if (selectedAddress) {
      localStorage.setItem("isAddressSelected", true);
      console.log("selected address", selectedAddress);
      navigate("/payment");
    } else {
      alert("please select address");
    }
  }

  async function handleAddAddress(address) {
    const userData = JSON.parse(localStorage.getItem("userData"));
    try {
      const res = await postData(`address`, {
        userId: userData._id,
        addressType: address.addressType,
        name: address.name,
        contactNo: address.phoneNo,
        pincode: address.pincode,
        street: address.address,
        locality: address.locality,
        city: address.city,
        state: address.state,
      });
      console.log("respondse", res);
      console.log("name", address);
      setAddresses([...addresses, res]);
      setSelectedAddress(res);
    } catch (error) {
      console.log(error);
    }
  }

  const removeAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  if (showModel) {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
    document.documentElement.style.overflow = "auto";
  }

  return (
    <div className="bg-white container-payment">
      <div className="container-fluid">
        <PaymentHeader />
        <main className="main-container-payment row container mx-auto address-main">
          <DeliveryAddressInADD
            toggle={toggle}
            onAddAddress={handleAddAddress}
            addresseFrom={addresses}
            setSelectedAddress={setSelectedAddress}
          />
          <div className="col-lg-4">
            <div className="payment-margin-top card px-2 py-3 mt-4 ">
              <TowardsPayment />

              <Button
                buttonText="CONTINUE"
                onClick={navigateToPayment}
                className="btn btn-block font-weight-bold btn-sm text-white py-2 bg-pink"
                type="button"
              />
            </div>
          </div>
        </main>
        <PaymentGatewayCards />
      </div>

      {showModel && (
        <AddressModel
          toggle={toggle}
          onAddAddress={handleAddAddress}
          onRemove={removeAddress}
        />
      )}
      {/* .........address model; */}
    </div>
  );
}

export default AddAddress;

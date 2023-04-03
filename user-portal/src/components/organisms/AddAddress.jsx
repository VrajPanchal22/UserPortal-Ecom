import React from "react";
import { useNavigate } from "react-router-dom";
import DeliveryAddressInADD from "../molecules/DeliveryAddressInADD";
import { useState } from "react";
import TowardsPayment from "../molecules/TowardsPayment";
import PaymentHeader from "../molecules/PaymentHeader";
import PaymentGatewayCards from "../molecules/PaymentGatewayCards";
import Button from "../atoms/Button";
import AddressModel from "../molecules/AddressModel";
function AddAddress() {
  const navigate = useNavigate();
  const [showModel, setShowModel] = useState(false);
  function toggle() {
    setShowModel(!showModel);
  }
  function navigateToPayment() {
    navigate("/payment");
  }
  const [addresses, setAddresses] = useState([]);
  console.log(addresses);
  const handleAddAddress = (address) => {
    setAddresses([...addresses, address]);
  };
  const removeAddress = (id) => {
    setAddresses(addresses.filter((address) => address.id !== id));
  };
  return (
    <div className="bg-white container-payment">
      <div className="container-fluid">
        <PaymentHeader />
        <main className="main-container-payment row container mx-auto">
          <DeliveryAddressInADD
            toggle={toggle}
            onAddAddress={handleAddAddress}
            addresses={addresses}
          />
          <div className="col-lg-4">
            <div className="card px-2 py-3 mt-4">
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

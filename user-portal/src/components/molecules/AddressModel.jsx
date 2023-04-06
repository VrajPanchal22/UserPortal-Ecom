import React from "react";
import { useState } from "react";
import AddressCard from "./AddressCard";
function AddressModel({ toggle, onAddAddress }) {
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    pincode: "",
    address: "",
    locality: "",
    city: "",
    state: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [selectedAddType, setSelectedAddType] = useState();

  const handleAddressType = (value) => {
    setFormData({
      ...formData,
      addressType: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onAddAddress(formData);
    setFormData({
      name: "",
      contactNo: "",
      pincode: "",
      address: "",
      locality: "",
      city: "",
      state: "",
    });
    toggle();
  };
  return (
    <div id="addressWindow" className="model position-absolute h-100 w-100 ">
      <div id="addressMainWindow" className="address-model rounded bg-white">
        <div className="d-flex align-items-center justify-content-between p-3 border-bottom">
          <div className="fs-6 font-weight-bold text-secondary">
            Add New Address
          </div>
          <img
            src="assets/images/close.png"
            alt="close"
            srcSet=""
            onClick={() => toggle()}
          />
        </div>
        <div className="p-3">
          <form action="#" id="addressForm" onSubmit={handleSubmit}>
            {/* <!-- contact details --> */}
            <div className="">
              <div className="fs-7 font-weight-bold text-secondary">
                Contact Details
              </div>

              {/* <!-- input component --> */}

              {/* <!-- name --> */}
              <div className="d-flex flex-column mt-3 text-secondary">
                <label htmlFor="name" className="fs-10 mb-0">
                  Name *
                </label>
                <div className="border rounded p-1 bg-white">
                  <input
                    className="w-100 border-0 px-2 fs-8 text-secondary"
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              {/* <!-- phone no --> */}
              <div className="d-flex flex-column mt-3 text-secondary">
                <label htmlFor="phoneNo" className="fs-10 mb-0">
                  Phone no. *
                </label>
                <div className="border rounded p-1 bg-white">
                  <input
                    className="w-100 border-0 px-2 fs-8 text-secondary"
                    type="number"
                    name="phoneNo"
                    id="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleInputChange}
                    placeholder="Phone number   "
                  />
                </div>
              </div>
            </div>

            {/* <!-- address details --> */}
            <div className="mt-4">
              <div className="fs-7 font-weight-bold text-secondary">
                Address
              </div>

              {/* <!-- pincode --> */}
              <div className="d-flex flex-column mt-3 text-secondary">
                <label htmlFor="pincode" className="fs-10 mb-0">
                  Pincode *
                </label>
                <div className="border rounded p-1 bg-white">
                  <input
                    className="w-100 border-0 px-2 fs-8 text-secondary"
                    type="number"
                    name="pincode"
                    id="pincode"
                    value={formData.pincode}
                    onChange={handleInputChange}
                    placeholder="Pincode"
                  />
                </div>
              </div>

              {/* <!-- Address --> */}
              <div className="d-flex flex-column mt-3 text-secondary">
                <label htmlFor="address" className="fs-10 mb-0">
                  Address(HouseNo, Building, Street, Area) *
                </label>
                <div className="border rounded p-1 bg-white">
                  <input
                    className="w-100 border-0 px-2 fs-8 text-secondary"
                    type="text"
                    name="address"
                    id="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Address"
                  />
                </div>
              </div>

              {/* <!-- locality/town --> */}
              <div className="d-flex flex-column mt-3 text-secondary">
                <label htmlFor="locality" className="fs-10 mb-0">
                  Locality/Town *
                </label>
                <div className="border rounded p-1 bg-white">
                  <input
                    className="w-100 border-0 px-2 fs-8 text-secondary"
                    type="text"
                    name="locality"
                    id="locality"
                    value={formData.locality}
                    onChange={handleInputChange}
                    placeholder="Locality/Town"
                  />
                </div>
              </div>

              {/* <!-- city and state --> */}
              <div
                id="city&State"
                className="d-flex justify-content-between d-none"
              >
                <div className="d-flex flex-column mt-3 mr-1 text-secondary">
                  <label htmlFor="city" className="fs-10 mb-0">
                    City *
                  </label>
                  <div className="border rounded p-1 bg-white">
                    <input
                      className="w-100 border-0 px-2 fs-8 text-secondary"
                      type="text"
                      name="city"
                      id="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      placeholder="City"
                      // disabled
                    />
                  </div>
                </div>

                <div className="d-flex flex-column mt-3 ml-1 text-secondary">
                  <label htmlFor="state" className="fs-10 mb-0">
                    State *
                  </label>
                  <div className="border rounded p-1 bg-white">
                    <input
                      className="w-100 border-0 px-2 fs-8 text-secondary"
                      type="text"
                      name="state"
                      id="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="State"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="fs-7 font-weight-bold text-secondary">
                Save Address as
              </div>

              <div className="d-flex">
                <input
                  className="d-none"
                  type="radio"
                  name="typeOfAddress"
                  id="home"
                  value="Home"
                />
                <label
                  htmlFor="home"
                  id="homeLabel"
                  className={`model-address-type font-weight-bold py-1 px-3 m-1 text-secondary px-2 mt-2 ${
                    selectedAddType === "Home" ? "label-selected" : ""
                  }`}
                  onClick={() => {
                    handleAddressType("home");
                    setSelectedAddType("Home");
                  }}
                >
                  Home
                </label>

                <input
                  className="d-none"
                  type="radio"
                  name="typeOfAddress"
                  id="work"
                  value="Work"
                />
                <label
                  htmlFor="work"
                  id="workLabel"
                  className={`model-address-type font-weight-bold py-1 px-3 m-1 text-secondary px-2 mt-2 ${
                    selectedAddType === "Work" ? "label-selected" : ""
                  }`}
                  onClick={() => {
                    handleAddressType("work");
                    setSelectedAddType("Work");
                  }}
                >
                  Work
                </label>
              </div>
            </div>

            <div className="mt-3">
              <input
                type="checkbox"
                name="defaultAddress"
                id="defaultAddress"
              />
              <label
                htmlFor="defaultAddress"
                className="fs-8 text-secondary pl-1"
              >
                Make this my default address
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-block font-weight-bold btn-sm text-white py-2 mt-5 bg-pink"
            >
              ADD ADDRESS
            </button>
          </form>
        </div>
      </div>
      {/* <AddressCard formData={formData} /> */}
    </div>
  );
}

export default AddressModel;

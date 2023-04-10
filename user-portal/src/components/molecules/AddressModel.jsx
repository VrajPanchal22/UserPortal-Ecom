import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { getData } from "../../services/api";
import AddressCard from "./AddressCard";
function AddressModel({ toggle, onAddAddress }) {
  const [pincodeErr, setPincodeErr] = useState("");
  // console.log("toggle", toggle);
  const [formData, setFormData] = useState({
    name: "",
    phoneNo: "",
    pincode: "",
    address: "",
    locality: "",
    city: "",
    state: "",
  });

  useEffect(() => {
    if (formData.pincode) {
      axios
        .get(`https://api.postalpincode.in/pincode/${formData.pincode}`)
        .then((res) => {
          const { District, State } = res.data[0].PostOffice[0];
          setFormData({ ...formData, city: District, state: State });
          console.log("city", res.data[0].PostOffice[0].District);
          console.log("state", res.data[0].PostOffice[0].State);
          console.log("response from pincode", formData.pincode);
          console.log("form data --------", formData);
          //console.log("Pincode", res.data[0].PostOffice[0]);
          setPincodeErr("");
        })
        .catch((err) => {
          console.error(err);
          setPincodeErr("Invalid pincode. Please enter a valid pincode.");
        });
    }
  }, [formData.pincode]);
  //console.log("Form data",for)
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
  const validatePhoneNo = (phoneNo) => {
    const pattern = /^[6-9]\d{9}$/; // 10 digits starting with 6, 7, 8 or 9
    return pattern.test(phoneNo);
  };
  const [phoneErr, setPhoneNoErr] = useState("");
  const handleSubmit = (event) => {
    // const validateContact = /^\d{10}$/;
    toggle();
    event.preventDefault();
    const isValidPhoneNo = validatePhoneNo(formData.phoneNo);
    if (!isValidPhoneNo) {
      setPhoneNoErr("Please enter a valid phone number.");
      return;
    }
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
    // console.log("contact------", formData.contactNo.length);
  };
  return (
    <div id="addressWindow" className="model position-absolute h-100 w-100">
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
              {phoneErr && <div className="text-danger fs-8">{phoneErr}</div>}
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
              {pincodeErr && (
                <div className="text-danger fs-8">{pincodeErr}</div>
              )}
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
                      disabled
                    />
                  </div>
                </div>

                <div className="d-flex flex-column mt-3 ml-1 text-secondary">
                  <label htmlFor="state" className="fs-10 mb-0">
                    State *
                  </label>
                  <div className="border rounded p-1 bg-white">
                    <input
                      className="w-100 border-0 px-2 fs-8 text-secondary "
                      type="text"
                      name="state"
                      id="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      placeholder="State"
                      disabled
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

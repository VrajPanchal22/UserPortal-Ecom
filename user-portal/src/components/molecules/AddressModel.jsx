import axios from "axios";
import React from "react";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function AddressModel({ toggle, onAddAddress }) {
  const [pincodeErr, setPincodeErr] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [selectedAddType, setSelectedAddType] = useState("");

  console.log("selected", selectedAddType);
  const formik = useFormik({
    initialValues: {
      name: "",
      phoneNo: "",
      pincode: "",
      address: "",
      locality: "",
      city: "",
      state: "",
      selectedAddType: "home",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phoneNo: Yup.string()
        .matches(/^[6-9]\d{9}$/, "Invalid phone number")
        .required("Phone number is required"),
      pincode: Yup.string().required("Pincode is required"),
      address: Yup.string().required("Address is required"),
      locality: Yup.string().required("Locality is required"),
      //city: Yup.string().required("City is required"),
      //state: Yup.string().required("State is required"),
    }),
    onSubmit: (values) => {
      console.log("values form form", values);
      if (values.pincode) {
        axios
          .get(`https://api.postalpincode.in/pincode/${values.pincode}`)
          .then((res) => {
            console.log("pincode responce------------------", res);
            const { District, State } = res.data[0].PostOffice[0];
            console.log("distrct", District, State);
            //const updatedValues = { ...values, city: District, state: State };
            formik.setFieldValue("city", District);
            formik.setFieldValue("state", State);
            const updatedAddress = { ...values, city: District, state: State };
            console.log("uodated", updatedAddress);
            onAddAddress(updatedAddress);
            toggle();
          })
          .catch((err) => {
            console.error("err]]]]]]]]]]]]]]]]]]]", err);
            setPincodeErr("Invalid pincode. Please enter a valid pincode.");
          });
      }
    },
  });
  const handleAddressTypeChange = (event) => {
    setSelectedAddType(event.target.value);
    formik.setFieldValue("selectedAddType", event.target.value);

    console.log("selectedAddType", typeof selectedAddType);
  };
  console.log("formik data", formik);
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
          <form onSubmit={formik.handleSubmit}>
            {/* contact details */}
            <div className="">
              <div className="fs-7 font-weight-bold text-secondary">
                Contact Details
              </div>

              {/* name */}
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
                    {...formik.getFieldProps("name")}
                  />
                </div>
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-danger fs-8">{formik.errors.name}</div>
                ) : null}
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
                    placeholder="Phone number "
                    {...formik.getFieldProps("phoneNo")}
                  />
                </div>
                {formik.touched.phoneNo && formik.errors.phoneNo ? (
                  <div className="text-danger fs-8">
                    {formik.errors.phoneNo}
                  </div>
                ) : null}
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
                    // value={formData.pincode}
                    // onChange={handleInputChange}
                    placeholder="pincode"
                    {...formik.getFieldProps("pincode")}
                  />
                </div>
                {pincodeErr && (
                  <div className="text-danger fs-8">{pincodeErr}</div>
                )}
              </div>
              {formik.touched.pincode && formik.errors.pincode ? (
                <div className="text-danger fs-8">{formik.errors.pincode}</div>
              ) : null}
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
                    // value={formData.address}
                    // onChange={handleInputChange}
                    placeholder="Address"
                    {...formik.getFieldProps("address")}
                  />
                </div>

                {formik.touched.address && formik.errors.address ? (
                  <div className="text-danger fs-8">
                    {formik.errors.address}
                  </div>
                ) : null}
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
                    // value={formData.locality}
                    // onChange={handleInputChange}
                    placeholder="Locality/Town"
                    {...formik.getFieldProps("locality")}
                  />
                </div>
                {formik.touched.locality && formik.errors.locality ? (
                  <div className="text-danger fs-8">
                    {formik.errors.locality}
                  </div>
                ) : null}
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
                      // defaultValue={city}
                      value={formik.values.city}
                      onChange={formik.handleChange}
                      placeholder="City"
                      disabled
                      {...formik.getFieldProps("city")}
                    />
                  </div>
                  {/* {formik.touched.city && formik.errors.city ? (
                    <div className="text-danger fs-8">{formik.errors.city}</div>
                  ) : null} */}
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
                      // defaultValue={state}
                      value={formik.values.state}
                      onChange={formik.handleChange}
                      placeholder="State"
                      disabled
                      {...formik.getFieldProps("state")}
                    />
                  </div>
                  {/* {formik.touched.state && formik.errors.state ? (
                    <div className="text-danger fs-8">
                      {formik.errors.state}
                    </div>
                  ) : null} */}
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div className="fs-7 font-weight-bold text-secondary">
                Save Address as
              </div>

              <div className="d-flex">
                <input
                  type="radio"
                  name="addressType"
                  id="home"
                  value="home"
                  className={`model-address-type font-weight-bold py-1 px-3 m-1 text-secondary px-2  ${
                    selectedAddType === "home" ? "label-selected" : ""
                  }`}
                  // defaultChecked={selectedAddType === "home"}
                  defaultChecked
                  onChange={handleAddressTypeChange}
                />
                <label htmlFor="home" className="fs-10 mb-0">
                  Home
                </label>

                <input
                  type="radio"
                  name="addressType"
                  id="work"
                  value="work"
                  className={`model-address-type font-weight-bold py-1 px-3 m-1 text-secondary px-2  ${
                    selectedAddType === "work" ? "label-selected" : ""
                  }`}
                  checked={selectedAddType === "work"}
                  onChange={handleAddressTypeChange}
                />
                <label htmlFor="work" className="fs-10 mb-0">
                  Work
                </label>
              </div>
            </div>

            {/* <div className="mt-3">
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
            </div> */}

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

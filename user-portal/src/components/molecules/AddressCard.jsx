import React from "react";

function AddressCard({ formData, onRemove }) {
  //   console.log(formData);
  const handleRemove = () => {
    onRemove(formData.id);
  };

  return (
    <div className="col-lg-6 col-12 z-index">
      <div className="card d-flex flex-row card-body my-2">
        <div className="custom-control custom-radio mr-1">
          <input
            type="radio"
            id={formData.id}
            name="addressSelect"
            className="custom-control-input"
            //   checked={formData.defaultAddress}
          />
          <label className="custom-control-label" htmlFor={formData.id}>
            <div className="ml-1">
              <div className="d-flex flex-row">
                <div className="fs-7 font-weight-bold my-1 text-drak-gray">
                  {formData.name}
                </div>

                <div className="address-type m-1 px-2 mt-2">
                  {/* {formData.typeOfAddress} */}
                </div>

                {/* {formData.defaultAddress
            ?
            '<div className="address-type m-1 px-2 mt-2">Default</div>'
            :
            ""
        } */}
              </div>
              <div className="mt-2">
                <div className="fs-8 text-secondary">{formData.address}</div>
                <div className="fs-8 text-secondary">
                  {formData.city + ", " + formData.state} -{" "}
                  <span>{formData.pincode}</span>
                </div>
                <div className="fs-8 text-secondary mt-2">
                  <span>Mobile:</span>
                  <span className="font-weight-bold fs-7 text-drak-gray">
                    {formData.phoneNo}
                  </span>
                </div>
                <div className="mt-3 fs-7 text-secondary">
                  <span>• </span>
                  Cash on Delivery available
                </div>
                <div className="mt-3">
                  <button
                    id={formData.id}
                    onClick={handleRemove}
                    className="btn btn-outline-dark fs-8 font-weight-bold text-drak-gray"
                  >
                    REMOVE
                  </button>

                  <button className="btn btn-outline-dark fs-8 mx-3 font-weight-bold text-drak-gray disabled">
                    EDIT
                  </button>
                </div>
              </div>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
}

export default AddressCard;

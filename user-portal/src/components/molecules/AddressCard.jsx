import React from "react";

function AddressCard({ data, onSelect, onDelete }) {
  function handleSelect() {
    onSelect(data);

    localStorage.setItem("selectedAddress", JSON.stringify(data));
  }
  return (
    <div className="col-lg-6 col-12 z-index">
      <div className="card d-flex flex-row card-body my-2">
        <div className="custom-control custom-radio mr-1">
          <input
            type="radio"
            id={data._id}
            name="addressSelect"
            className="custom-control-input"
            onChange={handleSelect}
          />
          <label className="custom-control-label" htmlFor={data._id}>
            <div className="ml-1">
              <div className="d-flex flex-row">
                <div className="fs-7 font-weight-bold my-1 text-drak-gray">
                  {data.name}
                </div>

                <div className="address-type m-1 px-2 mt-2">
                  {data.addressType}
                </div>
              </div>
              <div className="mt-2">
                <div className="fs-8 text-secondary">{data.street}</div>
                <div className="fs-8 text-secondary">
                  {data.city + ", " + data.state} - <span>{data.pincode}</span>
                </div>
                <div className="fs-8 text-secondary mt-2">
                  <span>Mobile:</span>
                  <span className="font-weight-bold fs-7 text-drak-gray">
                    {data.contactNo}
                  </span>
                </div>
                <div className="mt-3 fs-7 text-secondary">
                  <span>• </span>
                  Cash on Delivery available
                </div>
                <div className="mt-3">
                  <button
                    id={data.id}
                    className=" remove-btn-hover btn btn-outline-dark fs-8 font-weight-bold text-drak-gray bg-light "
                    onClick={onDelete}
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

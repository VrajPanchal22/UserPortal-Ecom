import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
function OrderPlaced() {
  const navigate = useNavigate();
  function handleContinueShopping() {
    navigate("/home");
  }
  function handleOrderDetail() {
    navigate("/orders");
  }
  return (
    <>
      <div className="empty-wishlistDiv">
        <img src="/assets/images/orderSuccess1.png"></img>
        <div className="text-success font-weight-bolder">CONGRATULATIONS !</div>
        <div>Your order has been successfully placed!</div>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-3 font-size flex-column">
        <Button
          onClick={handleOrderDetail}
          buttonText="VIEW ORDER DETAILS"
          className="view-order-btn"
        />
        <Button
          onClick={handleContinueShopping}
          buttonText="CONTINUE SHOPPING"
          className="order-continue-shopping mt-3"
        />
      </div>
    </>
  );
}

export default OrderPlaced;

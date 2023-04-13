import React from "react";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function CartEmptyContainer() {
const navigate = useNavigate()
  return (
    <div className="cart-empty-container">
      <h4>
        <strong>YOUR CART IS EMPTY!!!</strong>
      </h4>
      {/* <p>Your cart is empty. Start shopping now!</p> */}

      <Button onClick={()=>navigate('/home' )}>
        <strong>Continue Shopping</strong>
      </Button>
    </div>
  );
}

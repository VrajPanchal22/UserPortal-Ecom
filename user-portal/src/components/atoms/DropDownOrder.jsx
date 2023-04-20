import React from "react";
import { useNavigate } from "react-router-dom";
export default function Dropdown({ isOpen, set }) {
  const navigate = useNavigate();
  const handleOrders = () => {
    console.log("clicked navigation to ");
    navigate("/orders");
    set(!isOpen);
  };

  return (
    <div className={`dropdown-menu ${isOpen ? "show" : ""}`}>
      <a className="dropdown-item" onClick={handleOrders}>
        Orders
      </a>
    </div>
  );
}

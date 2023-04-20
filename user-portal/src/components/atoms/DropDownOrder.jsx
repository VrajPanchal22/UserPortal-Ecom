import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
export default function Dropdown({ isOpen, set }) {
  const navigate = useNavigate();
  const location = useLocation();
  const handleOrders = () => {
    console.log("clicked navigation to ");
    navigate("/orders");
    set(!isOpen);
  };

  const isProductRoute = location.pathname === "/productGallary";
  const dropdownClasses = `dropdown-menu ${isOpen ? "show" : ""} ${
    isProductRoute ? "product-dropdown" : ""
  }`;
  return (
    <div className={dropdownClasses}>
      <a className="dropdown-item" onClick={handleOrders}>
        Orders
      </a>
    </div>
  );
}

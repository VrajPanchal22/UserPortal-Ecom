import React, { useState, useEffect } from "react";
import List from "../atoms/List";
import { FaUser, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Dropdown from "../atoms/DropDownOrder";
import { API_BASE_URL } from "../../config";
import axios from "axios";
import { useContext } from "react";
import cartContext from "../../contexts/cartContext";

export default function NavbarMenus({ handleClick, name }) {
  const navigate = useNavigate();
  // const [productsInCart, setProductsInCart] = useState("");

  // const userData = JSON.parse(localStorage.getItem("userData"));
  // const tempId = sessionStorage.getItem("tempUserId");

  // const fetchData = async () => {
  //   try {
  //     const cartId = userData?.cartProductsInTempId ?? userData?._id ?? tempId;
  //     const url = `${API_BASE_URL}cart/${cartId}`;
  //     const response = await axios.get(url);
  //     if (response?.data?.data?.products) {
  //       const productInCart = response.data.data.products.flatMap((product) => product?.selectedVariants)
  //       setProductsInCart(productInCart.length);
  //     }
  //   } catch (error) {
  //     console.error("Error etching cart data:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  const { cartData, fetchData, productsInCart } = useContext(cartContext);
  const userData = JSON.parse(localStorage.getItem("userData"));
  const tempId = sessionStorage.getItem("tempUserId");
  useEffect(() => {
    fetchData();
  }, [productsInCart]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    console.log("clicked");
  };

  const handleDropdownEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
  };
  return (
    <>
      <ul className="navbar-nav topnav-menue">
        <li
          className="nav-item "
          onMouseEnter={handleDropdownEnter}
          onMouseLeave={handleDropdownLeave}
        >
          <a className="nav-link text-light" onClick={handleDropdownToggle}>
            <FaUser />
            <strong>
              {" "}
              {name} <i className="fa fa-caret-down"></i>
            </strong>
          </a>

          <Dropdown isOpen={isDropdownOpen} set={setIsDropdownOpen} />
        </li>

        <List
          className="nav-item "
          anchoreClassName="nav-link text-light"
          menuName="Cart"
          icon={<FaShoppingCart />}
          handleClick={() => navigate("/cart")}
          spanClassName={
            cartData.length > 0 && (userData || tempId)
              ? "nav-item-span"
              : "d-none"
          }
          spanValue={productsInCart}
        />
        <List
          className="nav-item"
          anchoreClassName="nav-link text-light"
          menuName="Wishlist"
          icon={<FaRegHeart />}
          handleClick={() => navigate("/wishlist")}
        />
      </ul>
    </>
  );
}

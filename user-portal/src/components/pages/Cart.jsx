import React from "react";
import CartCouponDetails from "../organisms/CartCouponDetails";
import CartHeader from "../organisms/CartHeader";
import CartOrderDetails from "../organisms/CartOrderDetails";
import CartProductCard from "../organisms/CartProductCard";
import CartSimilarProductList from "../organisms/CartSimilarProductList";
import CartFooter from "../organisms/CartFooter";
import CartReturnPolicy from "../organisms/CartReturnPolicy";
import cartContext from "../../contexts/cartContext";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../atoms/Loader";
import { API_BASE_URL } from "../../config";
export default function Cart() {
  const [cartData, setCartData] = useState([])
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);


  const tempId = localStorage.getItem("tempUserId")
  const userData = JSON.parse(localStorage.getItem("userData"));


    useEffect(() => {
      setLoader(true); 
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `${API_BASE_URL}cart/${!tempId ? userData._id : tempId}`
      );
      setCartData(response.data.data.products);
      setLoader(false);
    } catch (error) {
      setError(error);
    }
  };


  return (
    <>
      {loader ? (
        <Loader />
      ) : (
      <cartContext.Provider value={{cartData, fetchData}}>

      {/* Header */}
      <CartHeader className="header-cart row d-flex justify-content-center align-items-center px-5 py-4 font-weight-bold border-bottom" />

      {/* Main */}
   
      <div className="main-container container-fuild">

        {/* Top Container  */}
        <div className="main-container__top-div container col-xl-11 col-lg-12 col-md-12 col-sm-12  d-flex justify-content-center">

          {/* Left-side-content */}
          <div
            style={{ marginRight: 10, marginTop: 20 }}
            className="top-div__left-side col-xl-6 col-lg-7 col-md-7 col-sm-12 mt-5 mr-2 ">

            {/* Div-1-Heading  */}
            <div className="top-div__heading fs-3 font-weight-bold mb-3">Shopping Cart</div>
      
            {/* Div-2-Product Details  */}
            <div className="top-div__product-details__wrapper">
              <CartProductCard    />
            </div>

          </div>

          {/* Right-side-content  */}
          <div className="top-div__right-side  col-xl-5 col-lg-5 col-md-5 col-sm-12 mt-5">

            {/* Div-3-Order Details */}
            <CartOrderDetails />

            {/* Div-4-COUPON */}
            <CartCouponDetails />

            {/* Div-5 Return/Refund Policy  */}
            <CartReturnPolicy/>

          </div>
        </div>

        {/* Div-6 Similar Product Div  */}
        <CartSimilarProductList/>
      </div>

      {/* Footer */}
      <CartFooter/>
      {/* </CartContext.Provider> */}
      </cartContext.Provider>
      )}
    </>
  );
}

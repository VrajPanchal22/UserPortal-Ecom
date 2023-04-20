import React, { useContext } from "react";
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
import Footer from "../organisms/Footer";
import CartEmptyContainer from "../organisms/CartEmptyContainer";
import { API_BASE_URL } from "../../config";

export default function Cart() {
  // const [cartData, setCartData] = useState([]);
  // const [loader, setLoader] = useState(false);
  // const tempId = sessionStorage.getItem("tempUserId");
  // const userData = JSON.parse(localStorage.getItem("userData"));

  // useEffect(() => {
  //   setLoader(true);
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const cartId = userData?.cartProductsInTempId ?? userData?._id ?? tempId;
  //     const url = `${API_BASE_URL}cart/${cartId}`;
  //     const response = await axios.get(url);
  //     if (response?.data?.data?.products) {
  //       setCartData(response.data.data.products);
  //     }
  //     setLoader(false);
  //   } catch (error) {
  //     console.error("Error etching cart data:", error);
  //   } finally {
  //     setLoader(false);
  //   }
  // };
  // console.log("CartData: ", cartData);
  // console.log("cartData length: ", cartData.length);

  const tempId = sessionStorage.getItem("tempUserId");
  const userData = JSON.parse(localStorage.getItem("userData"));

  const { cartData, fetchData, productsInCart } = useContext(cartContext);
  useEffect(() => {
    if (userData || tempId) {
      fetchData();
    }
  }, []);
  return (
    <>
      {/* {loader ? (
        <Loader />
      ) : ( */}
        <>
          <CartHeader className="header-cart row d-flex justify-content-center align-items-center px-5 py-4 font-weight-bold border-bottom" />

          {cartData.length === 0 ? (
            <CartEmptyContainer />
          ) : (
            <div className="main-container container-fuild" style={{minHeight: "100vh"}}>
              <div className="main-container__top-div container col-xl-11 col-lg-12 col-md-12 col-sm-12  d-flex justify-content-center">
                <div
                  style={{ marginRight: 10, marginTop: 20 }}
                  className="top-div__left-side col-xl-6 col-lg-7 col-md-7 col-sm-12 mt-5 mr-2 "
                >
                  <div className="top-div__heading fs-3 font-weight-bold mb-3">
                    Shopping Cart
                  </div>

                  <div className="top-div__product-details__wrapper">
                    <CartProductCard />
                  </div>
                </div>

                <div className="top-div__right-side  col-xl-5 col-lg-5 col-md-5 col-sm-12 mt-5">
                  <CartOrderDetails />

                  <CartReturnPolicy />
                </div>
              </div>
              {/* <CartSimilarProductList /> */}
            </div>
          )}

          <CartFooter />

          <Footer className="footer" />
        </>
      {/* )} */}
    </>
  );
}

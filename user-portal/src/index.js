import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/custom.css";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "./config";
import axios from "axios";
import cartContext from "./contexts/cartContext";
import Loader from "./components/atoms/Loader";

function MyContextProvider(props) {
  const [cartData, setCartData] = useState([]);
  const [loader, setLoader] = useState(false);
  const [productsInCart, setProductsInCart] = useState("");

  const tempId = sessionStorage.getItem("tempUserId");
  const userData = JSON.parse(localStorage.getItem("userData"));

  const fetchData = async () => {
    try {
      console.log("CONTEXT FETCHDATA!!!");
      if (userData || tempId) {
        const cartId =
          userData?.cartProductsInTempId ?? userData?._id ?? tempId;
        const url = `${API_BASE_URL}cart/${cartId}`;
        const response = await axios.get(url);
        if (response?.data?.data?.products) {
          setCartData(response.data.data.products);
          const productInCart = response.data.data.products.flatMap(
            (product) => product?.selectedVariants
          );
          setProductsInCart(productInCart.length);
        }
        setLoader(false);
      } else {
        setCartData([]);
        setLoader(false);
      }
    } catch (error) {
      console.error("Error Fetching cart data:", error);
    } finally {
      setLoader(false);
    }
  };
  console.log("CartData: ", cartData);
  console.log("cartData length: ", cartData.length);
  

  useEffect(() => {
    setLoader(true);
    fetchData();
  }, []);

  function clearCart() {
    setCartData([]);
    fetchData()
  }

  return (
    <cartContext.Provider value={{ cartData, fetchData, productsInCart, clearCart }}>
      {loader ? <Loader /> : props.children}
    </cartContext.Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <MyContextProvider>
    <App />
  </MyContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

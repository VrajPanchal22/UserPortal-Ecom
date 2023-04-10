import React from "react";
import { useEffect } from "react";
import ProductAdressCard from "../molecules/ProductAdressCard";
import ADDPriceDetails from "../molecules/ADDPriceDetails";
import { getData } from "../../services/api";
import Button from "../atoms/Button";
import { useState } from "react";
function TowardsPayment() {
  const [cartData, setCartData] = useState([]);
  const userData = JSON.parse(localStorage.getItem("userData"));
  console.log("userData got", userData);
  useEffect(() => {
    getData(`cart/${userData ? userData._id : ""}`).then((res) => {
      setCartData(res.data.products);
      console.log(res, "response");
    });
  }, []);

  console.log("cartdata =========", cartData);
  return (
    <>
      <div className="">
        <div className="payment-cards">
          {cartData.map((product) => (
            <ProductAdressCard key={product._id} product={product} />
          ))}

          {/* <ProductAdressCard />
          <ProductAdressCard />
          <ProductAdressCard />
          <ProductAdressCard /> */}
        </div>
      </div>
      <ADDPriceDetails cartData={cartData} />
    </>
  );
}

export default TowardsPayment;

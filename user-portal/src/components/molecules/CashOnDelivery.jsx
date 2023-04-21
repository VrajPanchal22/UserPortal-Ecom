import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config";
import { postData } from "../../services/api";
import ImgTag from "../atoms/ImgTag";

function CashOnDelivery({ cartData, totalAmount, deliveryCharge }) {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setErrorMsg("");
  };
  function generateRandomNumber() {
    return Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
  }
  function handleRefreshCaptcha() {
    setRandomNumber(generateRandomNumber());
    setInputValue("");
    setErrorMsg("");
  }
  async function handlePlaceOrder() {
    if (inputValue === randomNumber.toString()) {
      console.log("total amount", totalAmount);
      const userData = JSON.parse(localStorage.getItem("userData"));
      console.log("userdata from CashOn del", userData);
      console.log("product details from cash on delivery", cartData);
      console.log("names", userData.firstName + userData.lastName);
      console.log("clicked");
      //console.log("testing", cartData[0]?.selectedVariants[0]?.images[0]);

      const selectedAddress = JSON.parse(
        localStorage.getItem("selectedAddress")
      );
      if (!selectedAddress) {
        alert("add or select your address in address page");
      }
      const address = selectedAddress.street;
      console.log("address", address);

      let residenceNo, residenceName;

      // Split the input string by commas and spaces
      const parts = address.trim().split(/[,\s]+/);

      // Find the first part that matches the pattern for the residence number
      const regex = /^(\w+-?\w*)$/;
      const index = parts.findIndex((part) => regex.test(part));

      if (index >= 0) {
        // If a residence number is found, extract it and the remaining parts as the residence name
        residenceNo = parts[index];
        if (!isNaN(residenceNo)) {
          // Convert the residence number to a string if it's a number
          residenceNo = String(residenceNo);
        }
        residenceName = parts.slice(index + 1).join(" ");
      } else {
        // If no residence number is found, assume that the entire input string is the residence name
        residenceNo = "D-123";
        residenceName = address;
      }
      console.log("residence num", typeof residenceNo);
      console.log("residnece name", residenceName);
      console.log("address selected", selectedAddress);
      console.log("testing address", selectedAddress.street);

      const currentDate = new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      });
      console.log("current date", currentDate);

      if (localStorage.getItem("selectedAddress")) {
        try {
          const res = await postData(`order`, {
            _Id: "10",
            user: {
              userId:
                userData.cartProductsInTempId == null
                  ? userData._id
                  : userData.cartProductsInTempId,
              name: userData.firstName + "" + userData.lastName,
              email: userData.emailId,
              contactNo: userData.contactNumber,
            },
            products: [
              {
                sellerId: "640b2ff711ca53eae736b4d9",
                name: cartData[0]?.name,
                image: cartData[0]?.selectedVariants[0]?.images[0],
                brand: "xyz",
                category: cartData[0]?.category,
              },
            ],
            paymentId: "640b2ff711ca53eae736b4d9",
            billingAddress: {
              residenceNo: residenceNo,
              residenceName: residenceName,
              street: selectedAddress?.locality,
              area: selectedAddress?.locality,
              city: selectedAddress?.city,
              pincode: selectedAddress?.pincode,
              state: selectedAddress?.state,
              country: "india",
            },
            shippingAddress: {
              residenceNo: residenceNo,
              residenceName: residenceName,
              street: selectedAddress?.locality,
              area: selectedAddress?.locality,
              city: selectedAddress?.city,
              pincode: selectedAddress?.pincode,
              state: selectedAddress?.state,
              country: "india",
            },
            status: "delivered",
            orderDate: currentDate,
            deliveryDate: currentDate,
            totalAmount: totalAmount,
            shippingCharge: deliveryCharge,
            variant: [
              {
                variantId: cartData[0]?.selectedVariants[0]?.variantId,
                images: cartData[0]?.selectedVariants[0]?.images[0],
                price: cartData[0]?.selectedVariants[0]?.price,
                size: cartData[0]?.selectedVariants[0]?.size,
                color: cartData[0]?.selectedVariants[0]?.color,
                quantity: cartData[0]?.selectedVariants[0]?.quantity,
              },
            ],
          });

          if ((res.msg = "order added successfully")) {
            console.log("inside API");
            const clearCartRes = await axios.delete(
              `${API_BASE_URL}cart/clearCart/${
                userData.cartProductsInTempId == null
                  ? userData._id
                  : userData.cartProductsInTempId
              }`,
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            );
            console.log(clearCartRes);
          }
        } catch (error) {
          console.log("error from post order", error.msg);
        }

        navigate(`/order-placed?userId=${userData._id}`);
      } else {
        alert("no address added");
      }
    } else {
      // Display an error message
      setErrorMsg("Please Enter Valid CODE");
      setInputValue("");
    }
  }
  return (
    <div id="cashOnDelivery" className="m-3">
      <div className="fs-7 font-weight-bold pt-1">
        Pay on delivery(Cash/UPI)
      </div>

      <div className="captcha-image d-flex flex-row align-items-center justify-content-between my-4">
        <div className="border border-secondary rounded random-box">
          <div className="fs-8 font-weight-bold p-2">{randomNumber}</div>
        </div>
        <div
          className="fs-8 font-weight-bold ml-4 change-code-cursor-pointer"
          onClick={handleRefreshCaptcha}
        >
          <span>CHANGE CODE</span>
        </div>
      </div>

      <div className="border rounded p-1">
        <input
          className="w-100 border-0 p-2 fs-8"
          type="text"
          name="randCode"
          id="randCode"
          placeholder="Enter code shown above*"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
      {errorMsg && <div className="text-danger fs-8">{errorMsg}</div>}
      {/* {errorMsg && <div className="text-danger fs-8">{errorMsg}</div>} */}
      <div className="fs-10 my-2">
        You can pay via Cash or UPI enabled app at the time of delivery. Ask
        your delivery executive for these options.
      </div>

      <button
        type="button"
        className="btn btn-block font-weight-bold btn-sm text-white py-2 my-4 bg-pink"
        onClick={handlePlaceOrder}
      >
        PLACE ORDER
      </button>
    </div>
  );
}

export default CashOnDelivery;

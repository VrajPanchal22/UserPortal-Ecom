import React from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../../services/api";
import Button from "../atoms/Button";
function NetbankingPayment({ cartData, totalAmount, deliveryCharge }) {
  const navigate = useNavigate();
  async function handlePlaceOrder() {
    console.log("total amount", totalAmount);
    const userData = JSON.parse(localStorage.getItem("userData"));
    console.log("userdata from CashOn del", userData);
    console.log("product details from cash on delivery", cartData);
    console.log("names", userData.firstName + userData.lastName);
    console.log("clicked");
    //console.log("testing", cartData[0]?.selectedVariants[0]?.images[0]);

    const selectedAddress = JSON.parse(localStorage.getItem("selectedAddress"));
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
      } catch (error) {
        console.log("error from post order", error.msg);
      }

      navigate(`/order-placed?userId=${userData._id}`);
    } else {
      alert("no address added");
    }
  }
  return (
    <div id="netBanking" className="m-3 ">
      <div className="fs-7 font-weight-bold pt-1">Net Banking</div>

      <div className="fs-8 text-secondary my-2">
        Pay instantly from your bank using Net Banking.
      </div>

      <select className="custom-select my-4">
        <option value="default" disabled>
          Select Bank
        </option>
        <option value="axis">Axis Bank</option>
        <option value="hdfc">HDFC Bank</option>
        <option value="icici">ICICI Bank</option>
        <option value="kotak">Kotak</option>
        <option value="sbi">SBI</option>
      </select>

      <Button
        className="btn btn-block font-weight-bold btn-sm text-white py-2 mt-3 bg-pink"
        buttonText="PAY NOW"
        type="button"
        onClick={handlePlaceOrder}
      />
    </div>
  );
}

export default NetbankingPayment;

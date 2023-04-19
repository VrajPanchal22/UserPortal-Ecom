import React from "react";
import { postData } from "../../services/api";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
function CreditDebit({ cartData, totalAmount, deliveryCharge }) {
  const navigate = useNavigate();
  async function handlePayment() {
    const userData = JSON.parse(localStorage.getItem("userData"));
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
    <div id="cardDetails" className="m-3 ">
      <div className="fs-7 font-weight-bold pt-1">CREDIT/DEBIT CARD</div>

      <div className="fs-8 text-secondary my-2">
        Please ensure your card can be used for online transactions.
      </div>

      <div className="border rounded p-1 mt-4">
        <input
          className="w-100 border-0 p-2 fs-8"
          type="text"
          name="cardNo"
          id="cardNo"
          placeholder="Card Number"
        />
      </div>

      <div className="border rounded p-1 mt-4">
        <input
          className="w-100 border-0 p-2 fs-8"
          type="text"
          name="cardHolderName"
          id="cardHolderName"
          placeholder="Card Holder Name"
        />
      </div>

      <div className="d-flex">
        <div className="border w-60 mr-2 rounded p-1 mt-4">
          <input
            className="w-100 border-0 p-2 fs-8"
            type="text"
            name="validity"
            id="validity"
            placeholder="Valid Thru (MM/YY)"
          />
        </div>

        <div className="border w-40 ml-2 rounded p-1 mt-4">
          <input
            className="w-100 border-0 p-2 fs-8"
            type="text"
            name="cvvNo"
            id="cvvNo"
            placeholder="CVV"
          />
        </div>
      </div>
      <Button
        className="btn btn-block font-weight-bold btn-sm text-white py-3 mt-5 bg-pink"
        buttonText="PAY NOW"
        onClick={handlePayment}
        type="button"
      />
    </div>
  );
}

export default CreditDebit;

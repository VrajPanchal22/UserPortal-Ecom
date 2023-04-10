import React from "react";
import CurrencyFormat from "react-currency-format";
function ADDPriceDetails({ cartData }) {
  console.log(cartData, "from ==");

  const discountPrice = 2999;
  const deliveryCharge = 200;
  const getCartTotal = (cartData) =>
    cartData.reduce((acc, curr) => {
      const selectedVariants = curr.selectedVariants;
      for (let i = 0; i < selectedVariants.length; i++) {
        const variant = selectedVariants[i];
        acc += variant.price * variant.quantity;
      }
      return acc;
    }, 0);

  const totalMRP = getCartTotal(cartData);
  const totalSubDiscount = totalMRP - discountPrice;
  const totalAmount = totalSubDiscount + deliveryCharge;
  console.log(getCartTotal);
  return (
    <div className="mt-2">
      <div className="fs-8 font-weight-bold mb-3">
        PRICE DETAILS ({cartData.length} items)
      </div>
      {/* <!-- price labels --> */}
      <div className="d-flex justify-content-between align-items-center fs-7 text-secondary my-2">
        <div className="">Total MRP</div>
        <div className="">
          <CurrencyFormat
            renderText={(value) => (
              <div className="cart-total font-weight-bold fs-7">{value}</div>
            )}
            decimalScale={2}
            value={totalMRP}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center fs-7 text-secondary my-2">
        <div className="">Discount on MRP</div>
        <div className="text-success">- ₹{discountPrice}</div>
      </div>
      <div className="d-flex justify-content-between align-items-center fs-7 text-secondary my-2">
        <div className="">Convenience Fees</div>
        <div className="">
          <span className="td-line-through">₹99</span>{" "}
          <span className="text-success">FREE</span>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center fs-7 text-secondary my-2">
        <div className="">Delivery Charges</div>
        <div className="text-success">+ ₹{deliveryCharge}</div>
      </div>
      <div className="d-flex justify-content-between align-items-center fs-7 font-weight-bold text-drak-gray my-2 border-top py-3">
        <div className="">Total Amount</div>
        <div className="">
          <CurrencyFormat
            renderText={(value) => (
              <div className="cart-total font-weight-bold fs-7">{value}</div>
            )}
            decimalScale={2}
            value={totalAmount}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
          />
        </div>
      </div>
    </div>
  );
}

export default ADDPriceDetails;

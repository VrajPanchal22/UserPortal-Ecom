import React from "react";
import ImgTag from "../atoms/ImgTag";
import Atag from "../atoms/Atag";
function PaymentGatewayCards() {
  return (
    <div className="footer-payment row justify-content-center border-top mt-4">
      <div className="d-flex container px-3 my-2 justify-content-between">
        <div className="pb-4">
          <ImgTag imgUrl="/assets/images/footer-bank-ssl.png" altText="image" />
          <ImgTag
            imgUrl="/assets/images/footer-bank-visa.png"
            altText="image"
          />
          <ImgTag imgUrl="/assets/images/footer-bank-mc.png" altText="image" />
          <ImgTag imgUrl="/assets/images/footer-bank-ae.png" altText="image" />
          <ImgTag imgUrl="/assets/images/footer-bank-dc.png" altText="image" />
          <ImgTag imgUrl="/assets/images/footer-bank-nb.png" altText="image" />
          <ImgTag imgUrl="/assets/images/footer-bank-cod.png" altText="image" />
          <ImgTag
            imgUrl="/assets/images/footer-bank-rupay.png"
            altText="image"
          />
          <ImgTag
            imgUrl="/assets/images/footer-bank-paypal.png"
            altText="image"
          />
          <ImgTag
            imgUrl="/assets/images/footer-bank-bhim.png"
            altText="image"
          />
        </div>
        <Atag
          href="#"
          className="fs-7 font-weight-bold text-drak-gray"
          aText="Need Help? Contact Us"
        />
      </div>
    </div>
  );
}

export default PaymentGatewayCards;

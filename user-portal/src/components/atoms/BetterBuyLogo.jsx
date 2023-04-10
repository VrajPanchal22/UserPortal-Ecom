import React from "react";
import ImgTag from "./ImgTag";
function BetterBuyLogo() {
  return (
    <div className="header-payment__logo-container text-left">
      <ImgTag
        className="header-payment__logo-image"
        imgUrl="/assets/images/logo-for-white-bg.png"
        altText="logo"
      />
    </div>
  );
}

export default BetterBuyLogo;

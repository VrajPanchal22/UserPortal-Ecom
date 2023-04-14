import React from "react";
import Button from "../atoms/Button";
import ImgTag from "../atoms/ImgTag";
import { useNavigate } from "react-router-dom";
import MainNavbar from "../organisms/MainNavbar";

function EmptyWishlist() {
  const navigate = useNavigate();
  const handleContineShopping = () => {
    navigate("/");
    console.log("homePage");
  };
  return (
    <>
      <MainNavbar />
      <div className="empty-wishlistDiv">
        <div className="Empty-wishlist-heading">
          <h2>Your wishlist is empty !</h2>
        </div>
        <div className="Empty-wishlist-p">
          <p>save your favourite items in your wishlist.</p>
        </div>
        <div className="wishlist-emptyImg">
          <ImgTag imgUrl="../assets/images/images.png" />
        </div>
        <div>
          <Button
            className="productlist-btn"
            buttonText="Continue Shopping"
            onClick={handleContineShopping}
          />
        </div>
      </div>
    </>
  );
}

export default EmptyWishlist;

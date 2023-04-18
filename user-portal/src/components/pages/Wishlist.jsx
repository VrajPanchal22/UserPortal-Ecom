import React from "react";
// import MainNavbar from "../organisms/MainNavbar";
import Footer from "../organisms/Footer";
import WishlistProdList from "../organisms/WishlistProdList";
import MainNavbar from "../organisms/MainNavbar";

function Wishlist() {
  console.log("wishlist");
  return (
    <div>
      <MainNavbar />
      <WishlistProdList />
      <Footer className="footer d-flex align-items-center" />
    </div>
  );
}

export default Wishlist;

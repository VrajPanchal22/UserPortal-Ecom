import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ProductList from "./components/organisms/ProductList";
import OrderPlaced from "./components/molecules/OrderPlaced";
import AddressPage from "./components/pages/AddressPage";
import Payment from "./components/pages/Payment";
import Cart from "./components/pages/Cart";
import WishlistPage from "./components/pages/Wishlist";
import Order from "./components/pages/Order";
import Invoice from "./components/pages/Invoice";

import Login from "./components/organisms/Login";
import Signup from "./components/organisms/Signup";
import Home from "./components/pages/Home";
import ProductGallary from "./components/pages/ProductGallary";
import ProductDetails from "./components/pages/ProductDetails";
import MainNavbar from "./components/organisms/MainNavbar";
import axios from "axios";
import Main from "./components/pages/Main";
import OrderDetails from "./components/pages/ViewOrder";
import { API_BASE_URL } from "./config";

export const axiosObject = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/address" element={<AddressPage />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Main />}>
          <Route
            path="/productdetails/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/productGallery" element={<ProductGallary />} />
          <Route path="/productGallery/:name" element={<ProductGallary />} />

          <Route path="/order-placed" element={<OrderPlaced />} />
          <Route path="/orders" element={<Order />}></Route>
          <Route path="/orders/Invoice" element={<Invoice />} />
          <Route path="/orders/view-order" element={<OrderDetails />} />
        </Route>
        <Route path="/wishlist" element={<WishlistPage />}></Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

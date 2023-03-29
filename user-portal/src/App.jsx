import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/organisms/Login";
import Signup from "./components/organisms/Signup";
import ProductGallary from "./components/pages/ProductGallary";
import axios from "axios";
import ProductDetails from './authentication/Authentication'
import Cart from "./components/pages/Cart";
import Payment from "./components/pages/Payment";

export const axiosObject = axios.create({
  baseURL: "http://localhost:4000/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/product-gallery' element={<ProductGallary />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

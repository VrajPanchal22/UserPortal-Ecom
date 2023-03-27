import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/organisms/Login";
import Signup from "./components/organisms/Signup";
import ProductGallary from "./components/pages/ProductGallary";
import axios from "axios";
import WishlistPage from "./components/pages/Wishlist";

export const axiosObject = axios.create({
  baseURL: "http://localhost:4000/api/",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/wishlist" element={<WishlistPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;

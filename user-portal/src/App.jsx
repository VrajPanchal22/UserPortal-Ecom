import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductGallary from "./components/pages/ProductGallary";
import axios from "axios";
import WishlistPage from "./components/pages/Wishlist";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/organisms/Login';
import Signup from './components/organisms/Signup';
import Home from './components/pages/Home';
import ProductGallary from './components/pages/ProductGallary'
import ProductDetails from './components/pages/ProductDetails';
import MainNavbar from './components/organisms/MainNavbar';
import axios from "axios";
import ProductList from './components/organisms/ProductList';
import Main from './components/pages/Main';

export const axiosObject = axios.create({
  baseURL: 'http://localhost:4000/api/',
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

function App() {
  return (
    // <>
    //   <Router>
    //     <Routes>
    //       <Route path="/wishlist" element={<WishlistPage />}></Route>
    //     </Routes>
    //   </Router>
    // </>
    <BrowserRouter>
      <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/' element={<Main />}>
          <Route path='/productdetails/:id' element={<ProductDetails/>}></Route>
          <Route path='/home' element={<Home />} />
          <Route path='/productGallary' element={<ProductGallary />} />
          <Route path='/productGallary/:name' element={<ProductGallary />} />
          <Route path="/wishlist" element={<WishlistPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/pages/Cart";
import Login from './components/organisms/Login';
import Signup from './components/organisms/Signup';
import Home from './components/pages/Home';
import ProductGallary from './components/pages/ProductGallary'
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

    <BrowserRouter>
    <Routes>
      <Route path='/cart' element={<Cart />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
      <Route path='/' element={<MainNavbar />}></Route>
      <Route path='/products' element={<ProductGallary />}></Route>
      <Route path='/products' element={<ProductList />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

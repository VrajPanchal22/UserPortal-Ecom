import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Login from './components/organisms/Login';
import Signup from './components/organisms/Signup';
import ProductGallary from './components/pages/ProductGallary'
import ProductDetails from './components/pages/ProductDetails';
import axios from "axios";



export const axiosObject = axios.create({
  baseURL: 'http://localhost:3200/api/',
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})

function App() {
  return (
    // <ProductDetails />
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />}></Route>
      <Route path='/signup' element={<Signup />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/organisms/Login';
import Signup from './components/organisms/Signup';
import Home from './components/pages/Home';
import ProductGallary from './components/pages/ProductGallary'
import axios from "axios";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path='/' element={<Login />}></Route>
//         <Route path='/signup' element={<Signup />}></Route>
//       </Routes>
//       <Routes>
//         <Route path='/home' element={<Home />} />
//       </Routes>
//     </BrowserRouter>



export const axiosObject = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})

function App() {
  return (
    <ProductGallary />
  );
}

export default App;

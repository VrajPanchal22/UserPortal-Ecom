import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import Login from './components/organisms/Login';
import Signup from './components/organisms/Signup';
import Header from './components/organisms/Header';
import MainNavbar from './components/organisms/MainNavbar'

function App() {
  return (
    // <BrowserRouter>
    // <Routes>
    //   <Route path='/' element={<Login />}></Route>
    //   <Route path='/signup' element={<Signup />}></Route>
    // </Routes>
    // </BrowserRouter>
  <>
  <MainNavbar />
  <Header />
  
  </>
  );
}

export default App;

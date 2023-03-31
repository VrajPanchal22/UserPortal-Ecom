import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Order from './components/pages/Order';
import Invoice from './components/pages/Invoice';



export const axiosObject = axios.create({
  baseURL: 'http://localhost:8000/api/',
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
          <Route path='/orders' element={<Order />}></Route>
          <Route path='/orders/Invoice' element={<Invoice/>}/>
      </Routes>
    </BrowserRouter>
    
    </>
    
  );
}

export default App;

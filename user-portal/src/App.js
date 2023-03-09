import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
 import LoginPage from './components/pages/Login';
import SignupPage from './components/pages/Signup';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />}></Route>
      <Route path='/signup' element={<SignupPage />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;

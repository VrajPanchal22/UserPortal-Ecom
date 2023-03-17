import React, { useState,useEffect } from 'react'
import Button from '../atoms/Button'
import ImgTag from '../atoms/ImgTag'
import NavbarMenus from '../molecules/NavbarMenus'
import SearchField from '../molecules/SearchField'

import {
  Collapse,
  NavbarToggler,
  Nav,

} from 'reactstrap';
import { useNavigate, useLocation } from 'react-router-dom'


function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [login,setLogin] = useState(false)
  const toggle = () => setIsOpen(!isOpen);
console.log(login)
const location = useLocation()
const navigate = useNavigate()

useEffect(()=>{
  if(login) {
    const currentPath = location.pathname;
    localStorage.setItem('path',currentPath);
    navigate('/login')
  }
},[login])
  
  return (
    <div className="main-header navbar navbar-expand-md" id="topnav">
      <div className="main-logo d-flex justify-content-center align-items-center mr-2">
        <ImgTag imgUrl='/assets/images/logo1.png' width="110" alt='logo' />
      </div>
      <SearchField />
      <div className="responsive">
        <div className='on-responsive'>
        <div className="button shadow">
          <Button className="login-button" buttonText="Login" onClick={()=> setLogin(true) }/>
        </div>
        <NavbarToggler className='bg-light hamburger' onClick={toggle} />
        </div> 
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavbarMenus />
          </Nav>
        </Collapse>
      </div>
    </div>
  )
}


export default MainNavbar

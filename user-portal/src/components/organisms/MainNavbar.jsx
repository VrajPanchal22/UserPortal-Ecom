import React, { useState, useEffect } from 'react'
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
import FlyOut from '../molecules/FlyOut'
import { useParams } from 'react-router-dom'

function MainNavbar() {
  let {name} = useParams()
  const [inputSearch, setInputSearch] = useState('')
  console.log("inputsearch",inputSearch)
  const [isOpen, setIsOpen] = useState(false);
  const [login, setLogin] = useState(false)
  const toggle = () => setIsOpen(!isOpen);
  let userData = JSON.parse(localStorage.getItem("userData"))
  const location = useLocation()
  const navigate = useNavigate()

 
  useEffect(() => {
    if (login) {
      const currentPath = location.pathname;
      localStorage.setItem('path', currentPath);
      navigate('/login')
    }

  }, [login])


  const [isFlyoutToggle, setIsFlyoutToggle] = useState(false);
  const handleClick = () => {
    setIsFlyoutToggle(!isFlyoutToggle);
  };

  return (
    <div className="main-header navbar navbar-expand-md" id="topnav">
      <div className="main-logo d-flex justify-content-center align-items-center mr-2">
        <ImgTag imgUrl="/assets/images/logo1.png" width="110" alt="logo" onClick={()=>navigate('/')}/>
      </div>
      <SearchField
        type="text"
        placeholder="Search for products brand & more.."
        id="category"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className="responsive">
        <div className='on-responsive'>
          <div className="button shadow">
            {
              userData?
              <Button className="login-button" buttonText="Logout" onClick={() => {localStorage.clear();navigate('/')}} />
            : <Button className="login-button" buttonText="Login" onClick={() => setLogin(true)} />
            }
          </div>
          <NavbarToggler className='bg-light hamburger' onClick={toggle} />
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavbarMenus handleClick={handleClick} name={userData?userData.firstName:""}/>
          </Nav>
        </Collapse>
      </div>
      {isFlyoutToggle ? <FlyOut handleClick={handleClick} /> : null}
    </div>
  );
}

export default MainNavbar;

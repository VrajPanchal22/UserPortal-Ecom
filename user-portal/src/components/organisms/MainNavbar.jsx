import React, { useState } from 'react'
import Button from '../atoms/Button'
import ImgTag from '../atoms/ImgTag'
import NavbarMenus from '../molecules/NavbarMenus'
import SearchField from '../molecules/SearchField'
import {
  Collapse,
  NavbarToggler,
  Nav,
} from 'reactstrap';
import FlyOut from '../molecules/FlyOut'
import { useParams } from 'react-router-dom'

function MainNavbar() {
  const [inputSearch, setInputSearch] = useState('')
  const { name } = useParams();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const [isFlyoutToggle, setIsFlyoutToggle] = useState(false)
  const handleClick = () => {
    setIsFlyoutToggle(!isFlyoutToggle)
  }

  return (
    <div className="main-header navbar navbar-expand-md" id="topnav">
      <div className="main-logo d-flex justify-content-center align-items-center mr-2">
        <ImgTag imgUrl='/assets/images/logo1.png' width="110" alt='logo' />
      </div>
      <SearchField type="text"
        placeholder="Search for products brand & more.."
        id="category"
        value={inputSearch}
        onChange={(e) => setInputSearch(e.target.value)}
      />
      <div className="responsive">
        <div className='on-responsive'>
          <div className="button shadow">
            <Button className="login-button" buttonText="Login" />
          </div>
          <NavbarToggler className='bg-light hamburger' onClick={toggle} />
        </div>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavbarMenus handleClick={handleClick} />
          </Nav>
        </Collapse>
      </div>
      {isFlyoutToggle ? <FlyOut handleClick={handleClick} /> : null}
    </div>
  )
}


export default MainNavbar

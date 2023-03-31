import React, { useState } from 'react'
import List from '../atoms/List'
import { FaUser, FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function NavbarMenus({handleClick}) { 
    const navigate = useNavigate()
    return (
        <>
            <ul className='navbar-nav topnav-menue' >
                <List className="nav-item" anchoreClassName="nav-link text-light" menuName="Profile"  icon={<FaUser />} />
                <List className="nav-item" anchoreClassName="nav-link text-light" menuName="Cart" icon={<FaShoppingCart />} />
                <List className="nav-item" anchoreClassName="nav-link text-light" menuName="Wishlist" icon={<FaRegHeart />} handleClick={()=>navigate('/wishlist')} />
            </ul>
        </>
    )
}

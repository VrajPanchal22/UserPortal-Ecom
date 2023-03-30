import React, { useState } from 'react'
import List from '../atoms/List'
import { FaUser, FaShoppingCart, FaRegHeart } from "react-icons/fa";


export default function NavbarMenus({handleClick}) { 
    return (
        <>
            <ul className='navbar-nav topnav-menue' >
                <List className="nav-item" anchoreClassName="nav-link text-light" menuName="Profile" handleClick={handleClick} icon={<FaUser />} />
                <List className="nav-item" anchoreClassName="nav-link text-light" menuName="Cart" icon={<FaShoppingCart />} />
                <List className="nav-item" anchoreClassName="nav-link text-light" menuName="Wishlist" icon={<FaRegHeart />} />
            </ul>
        </>
    )
}

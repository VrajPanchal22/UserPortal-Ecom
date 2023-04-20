import React from 'react';
import { useNavigate } from 'react-router-dom';
import DropDown from '../molecules/DropDown';
import HeaderMenus from '../molecules/HeaderMenus';
export default function Header() {

const navigate = useNavigate()

    return (
        <div className="navbar navbar-expand-lg menu-box d-flex justify-content-center align-items-center py-4 w-100">
            <div className="container d-flex justify-content-center" id="menu_box--container">
                <div className="d-flex flex-column align-items-center menu_box--circle mr-5">
                    <HeaderMenus imgUrl="/assets/images/women-icon-4.jpg" width="50rem" height="50rem" titleClassName="menu-name" title="Women's Fashion" onClick={()=>navigate("/productGallary/women")}/>
                </div>
                <div className="d-flex flex-column align-items-center menu_box--circle mr-5">
                    <HeaderMenus imgUrl="/assets/images/mens-fashion.jpg" width="50rem" height="50rem" titleClassName="menu-name" title="Men's Fashion" onClick={()=>navigate("/productGallary/men")}/>
                </div>
                <div className="d-flex flex-column align-items-center menu_box--circle">
                    <HeaderMenus imgUrl="/assets/images/kids-icon-4.jpg" width="50rem" height="50rem" titleClassName="menu-name" title="Kid's Fashion" onClick={()=>navigate("/productGallary/kids")}/>
                </div>
                {/* <div class="d-flex flex-column align-items-center dropdown menu_box--circle">
                    <HeaderMenus imgUrl="/assets/images/fashion.png" width="50rem" titleClassName="menu-name" />
                    <DropDown className="menu-name" title="Fashion"  data={['Men Wear', 'Women Wear', 'Kids Wear']} />
                </div>
                <div class="d-flex flex-column align-items-center dropdown menu_box--circle">
                    <HeaderMenus imgUrl="/assets/images/electronics.png" width="50rem" titleClassName="menu-name" />
                    <DropDown className='menu-name' title="Electronics" data={['Gaming', 'Personal care', 'Laptop & Desktop']}/>
                </div>
                <div class="d-flex flex-column align-items-center dropdown menu_box--circle">
                    <HeaderMenus imgUrl="/assets/images/home.jpg" width="50rem" titleClassName="menu-name" />
                    <DropDown className="menu-name" title="Home" data={['Tools & Utility', 'Furniture', 'Powerbank']} />
                </div>
                <div className="d-flex flex-column align-items-center menu_box--circle">
                    <HeaderMenus imgUrl="/assets/images/topoffers.png" width="50rem" titleClassName="menu-name" title="Offers" />
                </div>
                <div className="d-flex flex-column align-items-center dropdown menu_box--circle">
                    <HeaderMenus imgUrl="/assets/images/toys.png" width="50rem" titleClassName="menu-name" />
                    <DropDown className="menu-name" title="Toys, more" data={['Foods & drinks', 'Baby care', 'Books']} />
                </div>
                <div class="d-flex flex-column align-items-center dropdown menu_box--circle">
                    <HeaderMenus imgUrl="/assets/images/two-wheelers.png" width="50rem" titleClassName="menu-name" />
                    <DropDown className="menu-name" title="Toys, more" data={['Petrol Vehicles', 'Electric Vehicles']} />
                </div> */}
            </div>
        </div>
    )
}

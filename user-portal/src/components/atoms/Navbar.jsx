import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const Navbar = ({link1,link2,link3}) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem ><NavLink to="/">{link1}</NavLink></BreadcrumbItem>
        <BreadcrumbItem><NavLink to="/productGallary">{link2}</NavLink></BreadcrumbItem>
        <BreadcrumbItem id='active-link'><NavLink to="/orders">{link3}</NavLink></BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default Navbar;

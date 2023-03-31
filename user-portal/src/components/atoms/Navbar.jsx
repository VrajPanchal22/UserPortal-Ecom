import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Navbar = ({link1,link2,link3}) => {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbItem ><a href="#">{link1}</a></BreadcrumbItem>
        <BreadcrumbItem><a href="#">{link2}</a></BreadcrumbItem>
        <BreadcrumbItem active><a href="/orders">{link3}</a></BreadcrumbItem>
      </Breadcrumb>
    </>
  );
};

export default Navbar;

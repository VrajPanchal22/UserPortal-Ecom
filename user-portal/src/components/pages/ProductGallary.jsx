import React from 'react'
import FilterOptions from '../organisms/FilterOptions'
import ProductList from '../organisms/ProductList'
import ShortAndViewOptions from '../organisms/ShortAndViewOption'
import Footer from '../organisms/Footer'
import MainNavbar from '../organisms/MainNavbar'

function ProductGallary() {
  return (
    <>
      <div class=" w-100">
      <MainNavbar />
        <div class="main_section d-flex" >
          <FilterOptions />
          <div class="product_section container-fluid">
            <ShortAndViewOptions />
            <ProductList />
          </div>
        </div>
      <Footer className="footer d-flex align-items-center" />
      </div>
    </>
  )
}

export default ProductGallary

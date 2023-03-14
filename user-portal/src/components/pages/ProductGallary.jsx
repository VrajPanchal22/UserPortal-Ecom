import React, { useState } from 'react'
import FilterOptions from '../organisms/FilterOptions'
import ProductList from '../organisms/ProductList'
import ShortAndViewOptions from '../organisms/ShortAndViewOption'
import Footer from '../organisms/Footer'
import MainNavbar from '../organisms/MainNavbar'
import productGallaryContext from '../../contexts/productGallary'

function ProductGallary() {
  const [viewOption, setViewOption] = useState('grid');

  const contextValue = {
    viewOption,
    setViewOption
  }
  return (
    <>
      <div class=" w-100">
        <MainNavbar />
        <div class="main_section d-flex" >
          <productGallaryContext.Provider value={contextValue}>
            <FilterOptions />
            <div class="product_section container-fluid">
              <ShortAndViewOptions />
              <ProductList />
            </div>
          </productGallaryContext.Provider>
        </div>
        <Footer className="footer d-flex align-items-center" />
      </div>
    </>
  )
}

export default ProductGallary

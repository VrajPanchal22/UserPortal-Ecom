import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useNavigation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';
import productGallaryContext from '../../contexts/productGallary';
import InputTag from '../atoms/InputTag'

function BrandFilter() {

    const { filterqQuery, setFilterQuery } = useContext(productGallaryContext)
    // const [clearAll,setClearAll] = useState(false)
    // const [checked,setChecked] = useState(false)

    const brands = ['biba', 'libas', 'levis', 'w', 'hrx', 'adidas', 'puma'];
    return (
        <div className='filter-option'>
            <div className="d-flex justify-content-between">
                <span className="filter-name m-2"><b>BRAND</b></span>
                <span className="clearAll_btn m-2" style={{ color: 'var(--button-color)' }} 
                onClick={()=>{setFilterQuery((prevState) => ({
                  ...prevState,
                  Brand: [],
                }))}}>
                  <b>CLEAR ALL</b></span>
            </div>
            {
                brands.map((brand, index) => {
                    return (
                        <>
                            <InputTag type="checkbox"
          className="mx-2 brand-option"
          onClick={(event) => {
            const isChecked = event.target.checked;
            if (isChecked) {
              setFilterQuery((prevState) => ({
                ...prevState,
                Brand: [...prevState.Brand, brand],
              }));
            } else {
              setFilterQuery((prevState) => ({
                ...prevState,
                Brand: prevState.Brand.filter(
                  (selectedBrand) => selectedBrand !== brand
                ),
              }));
            }
          }}/>{brand.toUpperCase()}<br />
                        </>
                    )
                })
            }
        </div>
    )

}
export default BrandFilter

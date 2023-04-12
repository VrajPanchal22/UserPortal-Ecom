import React, { useContext } from 'react'
import productGallaryContext from '../../contexts/productGallary';

function SizeFilter() {
    const {ilterQuery,setFilterQuery}= useContext(productGallaryContext)
    const sizes = ['2xl', '2xs', '3xl', '3xs', '4xl', 'free size', 'l', 'm', 's', 'xl', 'xs'];
    return (
        <div className=" filter-option">
            <span className="filter-name m-2"><b>SIZE</b></span><br />
            {
                sizes.map((size) => {
                    return (
                        <>
                            <input type="checkbox" className="mx-2" 
                    onClick={(event) => {
            const isChecked = event.target.checked;
            if (isChecked) {
              setFilterQuery((prevState) => ({
                ...prevState,
                Size: [...prevState.Size, size],
              }));
            } else {
              setFilterQuery((prevState) => ({
                ...prevState,
                Size: prevState.Size.filter(
                  (selectedSize) => selectedSize !== size
                ),
              }));
            }
          }}/>{size.toUpperCase()}<br />
                        </>
                    )
                })
            }
        </div>
    )
}

export default SizeFilter

import React, { useContext } from 'react'
import productGallaryContext from '../../contexts/productGallary'
import InputTag from '../atoms/InputTag'

function DiscountFilter() {
    const {ilterQuery,setFilterQuery}= useContext(productGallaryContext)
    const discountOption = [10, 20, 30, 40, 50, 60, 70, 80]
    return (
        <div class="filter-option px-2">
            <span class="filter-name m-2">
                <b>DISCOUNT RANGE</b>
            </span><br />
            {
                discountOption.map((discount) => {
                    return (
                        <>
                            <InputTag type="radio" name="radio1" value={discount} onClick={()=>setFilterQuery(prevState => ({ ...prevState, ['Discount']: discount}))}/>{discount}% and above<br />
                        </>
                    )
                })
            }
        </div>
    )
}

export default DiscountFilter

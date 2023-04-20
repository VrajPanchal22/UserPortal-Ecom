import React, { useContext } from 'react'
import productGallaryContext from '../../contexts/productGallary'

function ClearAllFilter() {
  const { ilterQuery, setFilterQuery } = useContext(productGallaryContext)
  return (
    <div className="filter_clearAll_option d-flex justify-content-between" style={{height:'3rem' }}>
    <span className="filter_btn m-2"><b>FILTER</b></span>
    <span className="clearAll_btn m-2" style={{color:'var(--button-color)'}} onClick={()=>setFilterQuery({ Brand: [],
    Color: [],
    Size: [],
    Rate: [],
    Available: []})}><b>CLEAR ALL</b></span>
</div>
  )
}

export default ClearAllFilter

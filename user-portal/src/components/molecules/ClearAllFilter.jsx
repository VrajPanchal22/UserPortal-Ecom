import React, { useContext } from 'react'
import productGallaryContext from '../../contexts/productGallary'

function ClearAllFilter() {
  const { ilterQuery, setFilterQuery } = useContext(productGallaryContext)
  return (
    <div class="filter_clearAll_option d-flex justify-content-between" style={{height:'3rem' }}>
    <span class="filter_btn m-2"><b>FILTER</b></span>
    <span class="clearAll_btn m-2" style={{color:'var(--button-color)'}} onClick={()=>setFilterQuery([])}><b>CLEAR ALL</b></span>
</div>
  )
}

export default ClearAllFilter

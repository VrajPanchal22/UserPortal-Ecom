import React from 'react'

function ClearAllFilter() {
  return (
    <div class="filter_clearAll_option d-flex justify-content-between" style={{height:'3rem' }}>
    <span class="filter_btn m-2"><b>FILTER</b></span>
    <span class="clearAll_btn m-2" style={{color:'var(--button-color)'}}><b>CLEAR ALL</b></span>
</div>
  )
}

export default ClearAllFilter

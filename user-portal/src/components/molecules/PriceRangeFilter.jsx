import React from 'react'
import InputTag from '../atoms/InputTag'


function PriceRangeFilter() {
  return (
    <div className="filter-option">
    <header>
        <span className="filter-name m-2"><b>PRICE</b></span>
    </header>
    <div className="price-input d-flex justify-content-between align-items-center" style={{width : '100%'}}>
        <div className="field text-center">
            <p>Min</p>
            <InputTag type="number" className="input-min" value="25000" />
        </div>
        <span className="limit-separator text-center">-</span>
        <div className="field text-center">
            <p>Max</p>
            <InputTag type="number" className="input-max" value="75000" />
        </div>
    </div>
    <div className="slider-section mt-5">
        <div className="slider m-3">
            <div className="slider-range"></div>
        </div>
        <div className="range-input position-relative mb-3">
            <InputTag type="range" className="range-min" min="0" max="100000" value="25000" step="100" />
            <InputTag type="range" className="range-max" min="0" max="100000" value="75000" step="100" />
        </div>
    </div>
</div>
  )
}

export default PriceRangeFilter

import React, { useContext } from 'react'
import InputTag from '../atoms/InputTag'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useState } from "react";
import productGallaryContext from '../../contexts/productGallary';
import Button from '../atoms/Button';

function PriceRangeFilter() {
    const {ilterQuery,setFilterQuery}= useContext(productGallaryContext)
    const [value, setValue] = useState([30,60]);
  return (
    <div className="filter-option">
    <header>
        <span className="filter-name m-2"><b>PRICE</b></span>
    </header>
    <div className="price-input d-flex justify-content-between align-items-center" style={{width : '100%'}}>
        <div className="field text-center">
            <p>Min</p>
            <InputTag type="number" className="input-min" value={value[0]} />
        </div>
        <span className="limit-separator text-center">-</span>
        <div className="field text-center">
            <p>Max</p>
            <InputTag type="number" className="input-max" value={value[1]} />
        </div>
    </div>
        <div className="mx-1 my-3">
        <RangeSlider min="20" max = "100000" value={value} onInput={setValue} step={"5"} className="range-slider"/>
        </div>
        <Button buttonText="Set" onClick={()=>setFilterQuery(prevState => ({ ...prevState, 'max':value[1],'min':value[0] }))}/>
    </div>
  )
}

export default PriceRangeFilter

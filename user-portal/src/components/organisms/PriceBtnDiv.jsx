
import React from 'react'
import { useState } from 'react';
import 'react-bootstrap';
import { Button } from 'reactstrap';
import Para from '../atoms/Para';
import Span from '../atoms/Span';
import ProductShopBtn from '../molecules/ProductShopBtn';

function PriceBtnDiv(props) {

const{mrp,discount,variants} = props
const [isSizeSelected,setIsSizeSelected] = useState("")
console.log("sizebtn::::",isSizeSelected)
let price = mrp-(mrp*discount%100)
    return (
        <div className="mainContainer">
            <div className="d-flex align-items-center">
                <Para para= {"₹"+price} className="price-p text-uppercase font-weight-bold"/>
                <Span para= {mrp !== price?"MRP"+mrp:null} className="mrp-span ml-2"/>
                <Span para={discount !== 0?discount:null} className="discount-span text-uppercase font-weight-bold ml-2"/>
        </div>
        <div className="text-success ">
            <Span para="inclusive of all taxes" className="font-weight-bold"/>
        </div>
        <div className="d-flex align-items-center my-2">
                <Span para="select size" className="text-uppercase font-weight-bold"/>
                <Span para="size chart >" className="size-chart text-uppercase font-weight-bold ml-2"/>
        </div>
        <div className="d-flex my-3">
            {
                variants?.map((ele)=>{
                    return(
                        <Button type="button" className="size-pill badge badge-pill d-flex justify-content-center align-items-center mr-2 text-uppercase font-weight-bold" key={ele.size} onClick={()=>setIsSizeSelected(ele.size)}>
                        {ele.size}</Button>
                    )
                })
            }
        </div>
        <div className="">
            <ProductShopBtn isSelected={isSizeSelected}/>
        </div>
        </div>

    )
}
export default PriceBtnDiv
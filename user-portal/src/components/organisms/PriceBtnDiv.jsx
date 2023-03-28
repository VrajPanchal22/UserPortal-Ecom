
import React from 'react'
import { useState } from 'react';
import 'react-bootstrap';
import { Button } from 'reactstrap';
import Para from '../atoms/Para';
import Span from '../atoms/Span';
import ProductShopBtn from '../molecules/ProductShopBtn';

function PriceBtnDiv(props) {

    const { mrp, discount, variants, data, selectedVariant, selectVariant } = props
    const [isSizeSelected, setIsSizeSelected] = useState("")
    const [selectColor,setSelectedColor] = useState()
    const [index, setIndex] = useState()
    // console.log("sizebtn::::",isSizeSelected,data)
    let price = mrp - (mrp * discount % 100)



    const sizesByColor = {};

    variants?.map((variant, index) => {
        const color = variant.color;
        const size = variant.size;

        if (!sizesByColor[color]) {
            sizesByColor[color] = [];
        }

        sizesByColor[color].push(variants?.[index]?.color === color ? variants?.[index] :"");
        
    })

    return (
        <div className="mainContainer">
            <div className="d-flex align-items-center">
                <Para para={"₹" + price} className="price-p text-uppercase font-weight-bold" />
                <Span para={mrp !== price ? "MRP" + mrp : null} className="mrp-span ml-2" />
                <Span para={discount !== 0 ? discount : null} className="discount-span text-uppercase font-weight-bold ml-2" />
            </div>
            <div className="text-success ">
                <Span para="inclusive of all taxes" className="font-weight-bold" />
            </div>
            <div className="variants">
                <Span para="more colors" className="text-uppercase font-weight-bold" />
            </div>
            <div className='d-flex'>
                {
                    Object.keys(sizesByColor).map((ele, index) => {
                        return (
                            <div className="border border-dark rounded-circle d-flex justify-content-center align-items-center mr-2 color-button" key={index} onClick={() => setSelectedColor(sizesByColor[ele])} >
                                <div className="color border border-dark rounded-circle" style={{ backgroundColor: ele }}>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="d-flex align-items-center my-2">
                <Span para="select size" className="text-uppercase font-weight-bold" />
                <Span para="size chart >" className="size-chart text-uppercase font-weight-bold ml-2" />
            </div>
            <div className="d-flex my-3">
                {
                    selectColor?
                    Object.keys(selectColor).map((ele, index) => {
                            return (
                                <Button type="button" className="size-pill badge badge-pill d-flex justify-content-center align-items-center mr-2 text-uppercase font-weight-bold" key={index} onClick={() => { setIsSizeSelected(ele.size); setIndex(index);selectVariant(selectColor[ele]) }}>
                                    {selectColor[ele].size}</Button>
                            )
                    }):
                    data?.variants?.map((ele,index)=>{
                        if(ele?.color === selectedVariant?.color){
                            return (
                                <Button type="button" className="size-pill badge badge-pill d-flex justify-content-center align-items-center mr-2 text-uppercase font-weight-bold" key={index} onClick={() => { setIsSizeSelected(ele.size); setIndex(index);selectVariant(ele) }}>
                                    {ele?.size}</Button>
                            )
                        }
                    })
                }
            </div>
            <div className="">
                {
                    console.log("pricebtndiv::",selectedVariant)
                }
                <ProductShopBtn isSelected={isSizeSelected} index={index} data={data} variant={selectedVariant} />
            </div>
        </div>

    )
}
export default PriceBtnDiv
import ProductCard from "../molecules/ProductCard";
import { getData } from "../../services/api";
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";


function ProductList() {
    const [productList, setProductList] = useState([]);
    const navigate = useNavigate()
    useEffect(()=>{
         getData('product').then((res)=> {
            console.log(res.products);
            setProductList(res.products);
         })
    },[]);
  return (
    <div className="row product-section">
        {
            productList?.map((product)=>{
                console.log(product);
                return(<ProductCard product={product} onClick={()=>navigate(`/productdetails/${product?._id}`)} />)
            })
        }
    </div>
  )
}

export default ProductList

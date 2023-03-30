import ProductCard from "../molecules/ProductCard";
import { getData } from "../../services/api";
import React, { useEffect, useState } from 'react'


function ProductList() {
    const [productList, setProductList] = useState([]);

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
                return(<ProductCard product={product} />)
            })
        }
    </div>
  )
}

export default ProductList

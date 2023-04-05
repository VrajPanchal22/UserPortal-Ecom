import ProductCard from "../molecules/ProductCard";
import { Link } from "react-router-dom";
import { getData } from "../../services/api";
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useNavigation } from "react-router-dom";
import productGallaryContext from "../../contexts/productGallary";


function ProductList(props) {
  const{query}=props
  console.log(query,`product/${query?"?"+query:""}`)
    const {productList, setProductList} = useContext(productGallaryContext)
    const navigate = useNavigate()
let path = `product/?${query}`
    if(query){
      <Link to={path}></Link>
    }

    useEffect(()=>{
         getData(`product/?${query?query:""}`).then((res)=> {
            // console.log(res.products);
            setProductList(res.products);
         })
        
    },[query]);
    console.log(productList,"productlist")

    useEffect(() => {
      console.log("productList changed to:", productList);
      // ...map function here
    }, [productList]);

  return (
    <div className="row product-section">
        {
           productList?.map((product)=>{
                // console.log(product);
                return(<ProductCard product={product} onClick={()=>navigate(`/productdetails/${product?._id}`)} />)
            })
        }
    </div>
  )
}

export default ProductList

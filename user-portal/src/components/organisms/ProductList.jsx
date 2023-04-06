import ProductCard from "../molecules/ProductCard";
import { getData } from "../../services/api";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ProductList() {
  const [productList, setProductList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    getData("product").then((res) => {
      // console.log(res.products);
      setProductList(res.products);
    });
  }, []);

  // async function handleProductDetailPage(product){
  //   const tempId = sessionStorage.getItem("tempUserId")
  //   const userData = localStorage.getItem("userData")
  //   if(!tempId && !userData){
  //     try{
  //       console.log("generating TempId")
  //     const response1 = await axios.post(
  //       "http://localhost:4000/api/cart/guest"
  //     );
  //     sessionStorage.setItem("tempUserId", response1.data.userId);
  //     }catch(error){
  //       console.log(error)
  //     }
  //   }
  // }
  return (
    <div className="row product-section">
      {productList?.map((product) => {
        // console.log(product);
        return (
          <ProductCard
            product={product}
            onClick={() => navigate(`/productdetails/${product?._id}`)}
          />
        );
      })}
    </div>
  );
}

export default ProductList;

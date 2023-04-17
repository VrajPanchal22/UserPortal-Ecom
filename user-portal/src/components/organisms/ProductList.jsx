import ProductCard from "../molecules/ProductCard";
import { Link, useParams } from "react-router-dom";
import { getData } from "../../services/api";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import productGallaryContext from "../../contexts/productGallary";
import NoProduct from "../atoms/no-product";

function ProductList(props) {
  const { name } = useParams()
  // console.log("productlistparams:::",name)
  const { query } = props;
  console.log(query, `product/${query ? "?" + query : ""}`);
  const { productList, setProductList } = useContext(productGallaryContext);
  const navigate = useNavigate();
  const searchArr = []
  let path = `product/?${query}`;
  if (query) {
    <Link to={path}></Link>;
  }

  useEffect(() => {
    getData(`product/?${query ? query : ""}`).then((res) => {
      // console.log(res.products);
      setProductList(res.products);
    });
  }, [query]);
  console.log(productList, "productlist");

  useEffect(() => {
    console.log("productList changed to:", productList);
    // ...map function here
  }, [productList]);

  return (
    <div className="row product-section">
      {
        name
          ? productList?.map((product) => {
            console.log("searcharr:::",searchArr.length)
            if (product?.name?.toLowerCase() === name || product?.brand?.toLowerCase() === name) {
              searchArr.push(product)
              return (
                <ProductCard
                  product={product}
                  onClick={() => navigate(`/productdetails/${product?._id}`)}
                  key={product?._id}
                />
              );
            }
          }
          )
          : productList?.map((product) => {
            // console.log(product);
            return (
              <ProductCard
                product={product}
                onClick={() => navigate(`/productdetails/${product?._id}`)}
                key={product?._id}
              />
            );
          })
      }
      {
        name && searchArr.length === 0
        ? <NoProduct/>
        :""
      }
    </div>
  );
}

export default ProductList;

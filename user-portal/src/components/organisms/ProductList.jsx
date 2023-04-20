import ProductCard from "../molecules/ProductCard";
import { Link,useHistory, useParams } from "react-router-dom";
import { getData } from "../../services/api";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import productGallaryContext from "../../contexts/productGallary";
import NoProduct from "../atoms/no-product";

function ProductList(props) {
  const { name } = useParams()
  const { query } = props;
const [loader,setLoader] = useState("")

  console.log(query, `product/${query ? "?" + query : ""}`);
  const { productList, setProductList, setProductBrands, setProductColors, setProductSizes } = useContext(productGallaryContext);
  const navigate = useNavigate();
  // const history = useHistory();
  const searchArr = []
  let path = `product/?${query}`;
  if (query) {
    <Link to={path}></Link>;
  }

console.log("url-of-window",window.location.href)

  useEffect(() => {
    console.log("q = ", query)
    getData(`product/?${query ? query : ""}`).then((res) => {
      setProductList(res.products);
    });
    if(query){

    }
  }, [query]);
  console.log(productList, "productlist");

  useEffect(() => {
    console.log("productList changed to:", productList);
  }, [productList]);


  useEffect(() => {
    let setb = new Set()
    let setc = new Set()
    let sets = new Set()
    getData("product").then((res) => {
      console.log("edewdgedge3gddew", res?.products)
      res?.products?.forEach((product) => {
        console.log(product?.brand)
        setb.add(product?.brand.toLowerCase())
        setProductBrands([...setb])

        product?.variants?.forEach((variant) => {
          // console.log(variant,"cdfwfdygewdewytfdytew")
          setc.add(variant?.color?.toLowerCase())
          sets.add(variant?.size?.toLowerCase())
          setProductColors([...setc])
    setProductSizes([...sets])
        })
      })
    });
    console.log("setb::::::::::::::::::::::::::::::::::::::::::::", setb, setc, sets)
  }, [])

  return (
    <div className="row product-section">
      {
        name
          ? productList?.map((product) => {
            console.log("searcharr:::", searchArr.length)
            if (product?.name?.toLowerCase() === name || product?.brand?.toLowerCase() === name || product?.category?.split("/")[1] === name) {
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
            // setBrands((prevItems) => [...prevItems,product?.brand])
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
          ? <NoProduct />
          : ""
      }
    </div>
  );
}

export default ProductList;

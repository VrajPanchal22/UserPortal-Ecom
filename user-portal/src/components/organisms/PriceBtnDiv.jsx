import React from "react";
import { getData } from "../../services/api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "react-bootstrap";
import { Button } from "reactstrap";
import Para from "../atoms/Para";
import Span from "../atoms/Span";
import ProductShopBtn from "../molecules/ProductShopBtn";
import ImgTag from "../atoms/ImgTag";

function PriceBtnDiv(props) {
  const { mrp, discount, variants, data, selectedVariant, selectVariant } =
    props;
  const [isActive, setIsActive] = useState(false);
  const [isSizeSelected, setIsSizeSelected] = useState("");
  const [selectColor, setSelectedColor] = useState();
  const [index, setIndex] = useState();
  const [cartVariants, setCartVariants] = useState([]);
  const [isSizeChart,setIsSizeChart] = useState(false)
  const { id } = useParams();
  let arr = [];
  // console.log("sizebtn::::",isSizeSelected,data)
  let price = mrp - ((mrp * discount) % 100);
  const sizesByColor = {};
  variants?.map((variant, index) => {
    const color = variant.color;
    const size = variant.size;
    if (!sizesByColor[color]) {
      sizesByColor[color] = [];
    }
    sizesByColor[color].push(
      variants?.[index]?.color === color ? variants?.[index] : ""
    );
    return "";
  });
  async function goToCart() {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userId = userData._id;
    const tempId = localStorage.getItem("tempUserId");
    try {
      const cartData = await getData(`cart/${userId ? userId : tempId}`);
      const products = cartData?.data;
      console.log("cartData", products);
      products?.products?.map((product, index) => {
        if (product?.productId === id) {
          product?.selectedVariants?.map((variant, index) => {
            arr.push(variant?.variantId);
            setCartVariants(arr);
            return "";
          });
        }
        return "";
      });
    } catch (error) {
      console.log(error);
    }
  }
  // useEffect(()=>{
  //     goToCart()
  // },[userId])
  function active(val) {
    setIsActive(val);
  }
  const classname = `size-pill badge badge-pill d-flex justify-content-center align-items-center mr-2 text-uppercase font-weight-bold ${
    isActive ? "active" : ""
  }`;
  console.log(isActive, ":::::::active");
  return (
    <div className="mainContainer">
      <div className="d-flex align-items-center">
        <Para
          para={"₹" + price}
          className="price-p text-uppercase font-weight-bold"
        />
        <Span
          para={mrp !== price ? "MRP" + mrp : null}
          className="mrp-span ml-2"
        />
        <Span
          para={discount !== 0 ? discount : null}
          className="discount-span text-uppercase font-weight-bold ml-2"
        />
      </div>
      <div className="text-success ">
        <Span para="inclusive of all taxes" className="font-weight-bold" />
      </div>
      <div className="variants">
        <Span para="more colors" className="text-uppercase font-weight-bold" />
      </div>
      <div className="d-flex">
        {Object.keys(sizesByColor).map((ele, index) => {
          return (
            <div
              className="border border-dark rounded-circle d-flex justify-content-center align-items-center mr-2 color-button"
              style={
                isActive === ele
                  ? { backgroundColor: "#C00156" }
                  : { backgroundColor: "white" }
              }
              key={index}
              onClick={() => {
                setSelectedColor(sizesByColor[ele]);
                active(ele);
              }}
            >
              <div
                className="color border border-dark rounded-circle"
                style={{ backgroundColor: ele }}
              ></div>
            </div>
          );
        })}
      </div>
      <div className="d-flex align-items-center my-2">
        <Span para="select size" className="text-uppercase font-weight-bold" />
        <Span
          para="size chart >"
          className="size-chart text-uppercase font-weight-bold ml-2"
        onClick={()=>setIsSizeChart(!isSizeChart)}/>
      </div>
      <div>
        {
          isSizeChart?
          <ImgTag imgUrl="/assets/images/size-chart-2.jpeg"/>
          :""
        }
      </div>
      <div className="d-flex my-3">
        {selectColor
          ? Object.keys(selectColor).map((ele, index) => {
              return (
                <Button
                  type="button"
                  className={classname}
                  key={selectColor[ele].size}
                  onClick={() => {
                    setIsSizeSelected(ele.size);
                    setIndex(index);
                    selectVariant(selectColor[ele]);
                    active(true);
                  }}
                >
                  {selectColor[ele].size}
                </Button>
              );
            })
          : data?.variants?.map((ele, index) => {
              if (ele?.color === selectedVariant?.color) {
                return (
                  <Button
                    type="button"
                    className={classname}
                    key={ele.size}
                    onClick={() => {
                      setIsSizeSelected(ele.size);
                      setIndex(index);
                      selectVariant(ele);
                      goToCart();
                      active(true);
                    }}
                  >
                    {ele?.size}
                  </Button>
                );
              }
              return "";
            })}
      </div>
      <div className="">
        {console.log("pricebtndiv::", selectedVariant)}
        <ProductShopBtn
          isSelected={isSizeSelected}
          index={index}
          data={data}
          variant={selectedVariant}
          cartvariant={cartVariants}
          productid={id}
        />
      </div>
    </div>
  );
}
export default PriceBtnDiv;

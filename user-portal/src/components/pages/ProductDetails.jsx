import { useState, useEffect } from "react";
import ParaSpanDiv from "../organisms/ParaSpanDiv"
import PriceBtnDiv from "../organisms/PriceBtnDiv"
import RatingDiv from "../organisms/RatingDiv"
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { getData } from "../../services/api";


function ProductDetails() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
      // Check if the user is logged in
      const userToken = localStorage.getItem("userToken");
      setIsLoggedIn(!!userToken);
    }, []);
    const handleAddToCart = () => {
      // If the user is not logged in, generate a temporary user ID
      if (!isLoggedIn) {
        fetch("http://localhost:3200/api/cart/guest", { method: "POST" })
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem("userId", data.userId); // Redirect the user to the login page
            window.location.href = "/login";
          });
      } else {
        // Add the product to the user's cart // Redirect the user to the payment page // ...
      }
    };



  const obj = {
    "_id": {
      "$oid": "640f201af24ae119f50a86fe"
    },
    "name": "shirt",
    "image": "http://localhost:4000/assests/images/5d0ae8d3-3b1b-4f9e-82a6-c61f30237d74.png",
    "brand": "hh",
    "productDetails": {
      "key": "value",
      "key2": "value3"
    },
    "category": "/women/indianwear/women-sarees",
    "variants": [
      {
        "images": [
          "http://localhost:4000/assests/images/61034b13-d78f-410a-b921-db30871f9e2f.png",
          "http://localhost:4000/assests/images/4fa16449-0246-4270-8ced-e85d82e3e936.png"
        ],
        "price": 12344,
        "size": "m",
        "color": "black",
        "noOfProducts": 90,
        "_id": {
          "$oid": "640f201af24ae119f50a86ff"
        }
      }
    ],
    "__v": 0
  }

  const [data, setData] = useState()
  // const [variant,setvariant] = useState()
  useEffect(() => {
    
    async function func() {
      try{
      console.log("axios")
      const d = await getData('product/640f201af24ae119f50a86fe')
      console.log(d);
      setData(d.product)
    }catch(error){
      console.log(error)
    }
      // setvariant(d.product.variant)
      // .then(response => {
      //   console.log(response.data)
      // })
      // .catch(error => {
      //   console.error(error);
      // });
    }

    func()


  }, [])

  return (
    
    <div>
      <div>
        {" "}
        <button onClick={handleAddToCart}>Add to cart</button>{" "}
      </div>
      {/* {<h1>{data?.variants?.[0]?.price}</h1>} */}
      <RatingDiv brandName={data?.brand} name={data?.name} PclassName="brand text-uppercase font-weight-bold" SclassName="name text-capitalize" ratings="4.1" icon={<FaStar className="star-icon mb-1" />} /><hr />
      <PriceBtnDiv mrp={data?.variants?.[0]?.price} discount={data?.variants?.[0]?.discount ? data?.variants?.[0]?.discount : 0} variants={data?.variants} /><hr />
      <ParaSpanDiv />
    </div>
  )
}

export default ProductDetails
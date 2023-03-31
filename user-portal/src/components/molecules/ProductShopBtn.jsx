import Button from "../atoms/Button"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BsFillBagFill, BsCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useState} from "react";
import Para from "../atoms/Para";

function ProductShopBtn(props) {
    const { isSelected ,data,index,variant,cartvariant} = props
    console.log("cartvariant::::",cartvariant,variant?._id,cartvariant.includes(variant?._id))
    console.log(data,variant)
    const [flag, setFlag] = useState(false)
    const [res,setRes] = useState(0)
    const [size,setSize] = useState("")
    // console.log("shopbtn",isSelected,size)

    

        const handleAddToCart = async () => {
            const userData = JSON.parse(localStorage.getItem("userData"));
            const tempId = localStorage.getItem("tempUserId");
            // If the user is not logged in, generate a temporary user ID
            if (!userData && !tempId) {
              console.log("Temp id Generation");
              try {
                const response1 = await axios.post(
                  "http://localhost:4000/api/cart/guest"
                );
                localStorage.setItem("tempUserId", response1.data.userId);
                const response2 = await axios.patch(
                  `http://localhost:4000/api/cart/${response1.data.userId}`,
                  {
                                product: data
                  },
                                {
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                  }
                                );
                                console.log(response2.data);
                  setRes(response2.data)
                              } catch (error) {
                                console.log(error)
                              }
            } else if (tempId) {
                console.log("Product Addition in Cart for Not LoggedIn User");
      try {
        const response = await axios.patch(
          `http://localhost:4000/api/cart/${tempId}`,
          {
                        product: {
                            "productId": data._id,
                            "name": data.name,
                            "category": data.category,
                            "productDetails":data.productDetails,
                            "images": data.image,
                            "selectedVariants": [
                                {
                                    "images": variant.images,
                                    "price": variant.price,
                                    "size": variant.size,
                                    "color": variant.color,
                                    "quantity": variant.noOfProducts,
                                    "variantId": variant._id
                                }
                            ]
                        }
                    },
                {
                    headers: {
                      "Content-Type": "application/json",
                    }
                  }
                );
          setRes(response.data)
            
              } catch (error) {
                console.log(error)
              }
            }
         else {
                // Add the product to the user's cart // Redirect the user to the payment page // ...
                console.log("Product addition in cart for logged in user")
                try {
                  const response = await axios.patch(
                    `http://localhost:4000/api/cart/${userData._id}`,
                    {
                      product: {
                        "productId": data._id,
                        "name": data.name,
                        "category": data.category,
                        "productDetails":data.productDetails,
                        "images": data.image,
                        "selectedVariants": [
                            {
                                "images": variant.images,
                                "price": variant.price,
                                "size": variant.size,
                                "color": variant.color,
                                "quantity": variant.noOfProducts,
                                "variantId": variant._id
                            }
                        ]
                    }
                            },
                            {
                                headers:{
                                  "Content-Type": "application/json",
                                }
                              }
                              );
                    setRes(response.data)
                            } catch (error) {
                              console.log(error)
                            }
            }
        };

    // }, []);

    async function isAdded(){
      try{
      if(res && res?.status === true){
            toast.success("product added succesfully!!!")
        }
      }catch(error){
        console.log(error)
      }
    }
  

    return (
        <div className="btn-div">
        {
            console.log("res::::",res)
        }
            <div className="size">
                {
                    isSelected === "" && flag === false ? "" : isSelected === "" && flag === true ? <Para className="text-danger" para="Select size" /> : ""
                }
            </div>
            {
                // res && res.message=== "product add successfully" && size===isSelected
                cartvariant.includes(variant?._id)?
            <Button type="button" className="cart-btn btn rounded text-uppercase font-weight-bold mr-2 mt-1" icon={<BsFillBagFill className="bag-icon mr-2 mb-1" />} buttonText="Go to cart" onClick={() => { setFlag(!flag); handleAddToCart();setSize(isSelected);isAdded() }} />
                :
            <Button type="button" className="cart-btn btn rounded text-uppercase font-weight-bold mr-2 mt-1" icon={<BsFillBagFill className="bag-icon mr-2 mb-1" />} buttonText="add to cart" onClick={() => { setFlag(!flag); handleAddToCart();setSize(isSelected);isAdded() }} />
            }
            <Button type="button" className="buy-btn btn rounded text-uppercase font-weight-bold mr-2 mt-1" icon={<BsCartCheckFill className="buy-icon mr-2 mb-1" />} buttonText="buy now" />
            <Button type="button" className="wishlist-btn btn rounded text-uppercase font-weight-bold mr-2 mt-1" icon={<FaRegHeart className="buy-icon mr-2 mb-1" />} buttonText="wishlist" />
            <ToastContainer autoClose={1000}/>
        </div>
    )
}

export default ProductShopBtn
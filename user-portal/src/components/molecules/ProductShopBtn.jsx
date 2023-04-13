import Button from "../atoms/Button";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BsFillBagFill, BsCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import Para from "../atoms/Para";
import { getData, patchData, postData } from "../../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config";

function ProductShopBtn(props) {
  const { isSelected, data, variant, cartvariant, productid } = props;
  // console.log(data,"::::::::data")
  console.log(
    "cartvariant::::",
    cartvariant,
    variant?._id,
    cartvariant.includes(variant?._id)
  );
  console.log(data, variant);
  const [flag, setFlag] = useState(false);
  const [res, setRes] = useState(0);
  const [size, setSize] = useState("");
  const [iswishlisted, setIsWishlisted] = useState(false)
  
  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = async () => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    const token = localStorage.getItem("token");
    const tempId = sessionStorage.getItem("tempUserId");

    // If there is token and userData then add the product into userData._id
    // If the user is not logged in, generate a temporary user ID and add product into it
    if (!userData && !token && !tempId) {
      console.log("Temp id Generation");
      try {
        const response1 = await axios.post(
          "http://localhost:4000/api/cart/guest"
        );
        sessionStorage.setItem("tempUserId", response1.data.userId);
        console.log("!userData && !token && !tempId");
        const response2 = await axios.patch(
          `http://localhost:4000/api/cart/${response1.data.userId}`,
          {
            product: {
              productId: data._id,
              name: data.name,
              category: data.category,
              productDetails: data.productDetails,
              // images: data.image,
              brand: data.brand,
              selectedVariants: [
                {
                  images: variant.images,
                  price: variant.price,
                  size: variant.size,
                  color: variant.color,
                  quantity: 1,
                  variantId: variant._id,
                },
              ],
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response2?.data);
        setRes(response2?.data);
      } catch (error) {
        console.log(error);
      }
    } else if (tempId ) {
      //if tempId is generated no need to generate again diretly add product into it
      console.log("Product Addition in Cart for Not LoggedIn User");
      try {
        console.log("else");
        const response = await axios.patch(
          `${API_BASE_URL}cart/${tempId}`,
          {
            product: {
              productId: data._id,
              name: data.name,
              category: data.category,
              productDetails: data.productDetails,
              images: data.image,
              brand: data.brand,
              selectedVariants: [
                {
                  images: variant.images,
                  price: variant.price,
                  size: variant.size,
                  color: variant.color,
                  quantity: 1,
                  variantId: variant._id,
                },
              ],
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log(response.data);
        setRes(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      // Add the product to the user's cart using UserId
      console.log("Product addition in cart for logged in user");
      console.log("userData",userData)
      try {
        console.log("userData & Token");
        const response = await axios.patch(
          `http://localhost:4000/api/cart/${userData.cartProductsInTempId===null ? userData._id : userData.cartProductsInTempId}`,
          {
            product: {
              productId: data._id,
              name: data.name,
              category: data.category,
              productDetails: data.productDetails,
              images: data.image,
              brand: data.brand,
              selectedVariants: [
                {
                  images: variant.images,
                  price: variant.price,
                  size: variant.size,
                  color: variant.color,
                  quantity: 1,
                  variantId: variant._id,
                },
              ],
            },
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setRes(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  // }, []);
  async function handleWishlist() {
    const userData = JSON.parse(localStorage.getItem("userData"));

    if (userData) {
      const userId = userData._id;

      let wishobj = {
        userId: userId,
        products: {
          productId: productid,
          category: data?.category,
          name: data?.name,
          brand: data?.brand,
          selectedVarient: {
            variantId: variant?._id,
            images: variant?.images,
            price: variant?.price,
            size: variant?.size,
            color: variant?.color,
          },
        },
      };
      console.log(wishobj);
      try {
        const list = await getData(`/wishlist/${userId}`)
        console.log("list", list)
        if (list.wishlistData !== "no data with this id") {
          if (list?.wishlistData?.products?.length > 0) {
            if (list.wishlistData !== "no data with this id") {
              console.log("if")
              list?.wishlistData?.products?.map((product) => {
                if (product?.productId === productid) {
                  toast.success("product already wishlisted")
                  setIsWishlisted(true)
                } else {
                  console.log("else1")
                  async function addProduct() {
                    try {
                      const res = await patchData(`/wishlist/${userId}`,
                        {
                          product: {
                            "productId": productid,
                            "category": data?.category,
                            "name": data?.name,
                            "brand": data?.brand,
                            "selectedVarient": {
                              "variantId": variant?._id,
                              "images": variant?.images,
                              "price": variant?.price,
                              "size": variant?.size,
                              "color": variant?.color
                            }
                          }
                        }
                      )
                      setIsWishlisted(true)
                    } catch (error) {
                      console.log(error)
                    }
                  }
                  addProduct()
                }
                return ""
              })
            }
          }
          else {
            console.log("if else")
            async function addProduct() {
              try {
                const res = await patchData(`/wishlist/${userId}`,
                  {
                    product: {
                      "productId": productid,
                      "category": data?.category,
                      "name": data?.name,
                      "brand": data?.brand,
                      "selectedVarient": {
                        "variantId": variant?._id,
                        "images": variant?.images,
                        "price": variant?.price,
                        "size": variant?.size,
                        "color": variant?.color
                      }
                    }
                  }
                )
                setIsWishlisted(true)
              } catch (error) {
                console.log(error)
              }
            }
            addProduct()
          }
        } else {
          console.log("else");
          const wishlist = await postData("/wishlist", wishobj);
          console.log(wishlist, ":::::::::wishlist");
          if (wishlist?.status === true) {
            setIsWishlisted(true);
          }
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      const currentPath = location.pathname;
      localStorage.setItem('path', currentPath);
      navigate('/login')
    }
  }
  console.log(iswishlisted);
  return (
    <div className="btn-div">
      {console.log("res::::", res)}
      <div className="size">
        {isSelected === "" && flag === false ? (
          ""
        ) : isSelected === "" && flag === true ? (
          <Para className="text-danger" para="Select size" />
        ) : (
          ""
        )}
      </div>
      {
        // res && res.message=== "product add successfully" && size===isSelected
        cartvariant.includes(variant?._id) || res?.status === true ?
          <Button type="button" className="cart-btn btn rounded text-uppercase font-weight-bold mr-2 mt-1" icon={<BsFillBagFill className="bag-icon mr-2 mb-1" />} buttonText="Go to cart" onClick={() => { setFlag(!flag); handleAddToCart(); navigate('/cart') }} />
          :
          <Button type="button" className="cart-btn btn rounded text-uppercase font-weight-bold mr-2 mt-1" icon={<BsFillBagFill className="bag-icon mr-2 mb-1" />} buttonText="add to cart" onClick={() => { setFlag(!flag); handleAddToCart(); }} />
      }
      <Button type="button" className="buy-btn btn rounded text-uppercase font-weight-bold mr-2 mt-1" icon={<BsCartCheckFill className="buy-icon mr-2 mb-1" />} buttonText="buy now" onClick={() => navigate('/orders')} />
      {
        iswishlisted
          ? <Button type="button" className="wishlist-btn btn rounded text-uppercase font-weight-bold mr-2 mt-1" icon={<FaRegHeart className="buy-icon mr-2 mb-1" />} buttonText="wishlisted" onClick={() => handleWishlist()} />
          : <Button type="button" className="wishlist-btn btn rounded text-uppercase font-weight-bold mr-2 mt-1" icon={<FaRegHeart className="buy-icon mr-2 mb-1" />} buttonText="wishlist" onClick={() => handleWishlist()} />
      }
      {/* <Button
        type="button"
        className="buy-btn btn rounded text-uppercase font-weight-bold mr-2 mt-1"
        icon={<BsCartCheckFill className="buy-icon mr-2 mb-1" />}
        buttonText="buy now"
        onClick={() => navigate("/orders")}
      />
      {iswishlisted ? (
        <Button
          type="button"
          className="wishlist-btn btn rounded text-uppercase font-weight-bold mr-2 mt-1"
          icon={<FaRegHeart className="buy-icon mr-2 mb-1" />}
          buttonText="wishlisted"
          onClick={() => handleWishlist()}
        />
      ) : (
        <Button
          type="button"
          className="wishlist-btn btn rounded text-uppercase font-weight-bold mr-2 mt-1"
          icon={<FaRegHeart className="buy-icon mr-2 mb-1" />}
          buttonText="wishlist"
          onClick={() => handleWishlist()}
        />
      )} */}
      <ToastContainer autoClose={1000} />
    </div>
  );
}
export default ProductShopBtn;

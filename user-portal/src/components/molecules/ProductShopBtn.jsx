import Button from "../atoms/Button"
import { BsFillBagFill,BsCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { useState,useEffect } from "react";
import Para from "../atoms/Para";

function ProductShopBtn(props){
    const{isSelected} = props
    // console.log("cartbtn",isSelected)
    const[flag,setFlag] = useState(false)
console.log("flag",flag);
    return(
        <>
        <div className="size">
            {
                isSelected === "" && flag === false ?"":isSelected === "" && flag === true?<Para className="text-danger" para="Select size"/>:""
            }
        </div>
         <Button type="button" className="cart-btn btn rounded text-uppercase font-weight-bold mr-2" icon={<BsFillBagFill className="bag-icon mr-2 mb-1"/>} buttonText="add to cart" onClick={()=>setFlag(!flag)}/>
         <Button type="button" className="buy-btn btn rounded text-uppercase font-weight-bold mr-2" icon={<BsCartCheckFill className="buy-icon mr-2 mb-1"/>} buttonText="buy now"/>
         <Button type="button" className="wishlist-btn btn rounded text-uppercase font-weight-bold mr-2" icon={<FaRegHeart className="buy-icon mr-2 mb-1"/>} buttonText="wishlist" />
         </>
    )
}

export default ProductShopBtn
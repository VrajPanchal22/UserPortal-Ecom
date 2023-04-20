import ImgTag from "../atoms/ImgTag";
import Zoom from 'react-img-hover-zoom'
import {useState} from 'react'
import { useEffect } from "react";

function ProductImgDiv(props){
    const {variant} = props
    const[src,setSrc] = useState([])
    const[selectedimg,setSelectedImg] = useState(0)
    console.log("src prop::::",selectedimg)

    useEffect(()=>{
        setSrc(variant?.images);
    },[variant])
    
    return(
        <div className="row img-container">
            <div className="col d-flex flex-column align-items-end mt-5 small-img-div">
                {
                src?.map((ele,index)=>{
                    return (
                        <ImgTag imgUrl={ele} altText={index} className="product-img-small mb-2 ml-2" onClick={()=>setSelectedImg(index)} key={index}/>
                    )
                })
                }
            </div>

            <div className="col d-flex justify-content-end align-items-center mt-5 big-img-div">
                {
                src?.map((ele,index)=>{
                    console.log(ele);
                    if(index === selectedimg){
                        return (
                            <Zoom
                            img={ele}
                            zoomScale={3}
                            width={600}
                            height={600}
                            style={{}}
                            className="product-img-big"
                            key={ele}/>
                        )
                    }
                    return ""
                })
                }
            </div>
        </div>
    )
}

export default ProductImgDiv

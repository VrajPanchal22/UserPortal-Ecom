import ImgTag from "../atoms/ImgTag";
import Zoom from 'react-img-hover-zoom'
import {useState} from 'react'

function ProductImgDiv(props){
    const {src} = props
    const[selectedimg,setSelectedImg] = useState(0)

    return(
        <div className="row img-container">
        <div className="col d-flex flex-column align-items-end mt-5 small-img-div">
            {
            src?.map((ele,index)=>{
                return (
                    <ImgTag imgUrl={ele} altText={index} className="product-img-small mb-2 ml-2" onclick={()=>setSelectedImg(index)} key={index}/>
                )
            })
        }
        {console.log(selectedimg)}
        {/* <ImgTag imgUrl={src} className="w-50 mb-2"/> */}
        {/* <ImgTag imgUrl="/assets/images/shirt.jpeg" className="w-50 mb-2"/> */}
        </div>

        <div className="col d-flex justify-content-end align-items-center mt-5 big-img-div">
            {
            src?.map((ele,index)=>{
                if(index === selectedimg){
                return (
                    <Zoom
                    img={ele}
                    zoomScale={3}
                    width={600}
                    height={600}
                    style={{}}
                    className="product-img-big"
                  key={index}/>
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
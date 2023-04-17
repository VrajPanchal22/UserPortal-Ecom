import ImgTag from "./ImgTag";

export default function NoProduct(){
    return(
        <div className="m-auto no-product">
        <ImgTag imgUrl="/assets/images/NoOrders3.png" width="240rem" height="auto"/>
        <div className="d-flex flex-column justify-content-center align-items-center">
        <h1>Sorry!</h1>
        <p className="font-weight-bold ">No product found</p>
        </div>
        </div>
    )
}
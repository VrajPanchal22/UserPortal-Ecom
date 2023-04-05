import moment from "moment";
import { NavLink } from "react-router-dom";
import { Button, Badge } from "reactstrap";
function ViewOrderOrg({obj}) {
    let {_Id,orderDate,deliveryDate,status,totalAmount,shippingCharge}= obj;
    let {products:[{name,category,image}]}= obj
    let {variant:[{price}]}=obj;
    let {shippingAddress:{residenceNo,residenceName,area,city,pincode,state,street,country}}=obj;



    return (<div className="container">
        <div className="row m-1 p-1 d-flex flex-column justify-items-center align-items-center">
            <h1>Order Details</h1>
        </div>
        <div className="row p-3">
            <div className="col-3">Ordered On {moment(orderDate).format("DD MMMM YYYY")} </div>
            <div className="col-6"></div>
            <div className="col-3 float-right">Order ID: {_Id}</div>
        </div>
        <div className="row square rounded border m-2 p-3 ">
            <div className="col-2">
                <img src={image} className="view-product-img" alt="product image" />
            </div>
            <div className="col-6 d-flex flex-column justify-content-center">
                <NavLink to={{ pathname: "/productGallary/:name" }} className="product-link m-1">
                    {name}
                </NavLink>
                <div className="m-1">
                    <div>
                        {price} ₹
                    </div>
                </div>
                <div>
                    <Button className="m-1">Buy It Again</Button>
                </div>
            </div>
            <div className="col-4 pt-4">
                <p>Sold By : Fire Bolt Private Ltd</p>
                <p>Category : {category}</p>
                <div><span><Badge color={`${getColorByOrderStatus(status)} p-2`}>{status}</Badge></span>
                </div>
            </div>
        </div>
        <p className="p-3">Delivered On {moment(deliveryDate).format("DD MMMM YYYY")}</p>
        <div className="row square rounded border m-2 p-3">
            <div className="col-12">
                <div className="row p-2">
                    <div className="col-3 pl-5">
                        <div>
                            <p className="order-detail-header">Shipping Address</p>
                            <p>{residenceNo},{residenceName},</p>
                            <p>{street},</p>
                            <p>{area},</p>
                            <p>{city},{state},{pincode}</p>
                            <p>{country}</p>
                        </div>
                    </div>
                    <div className="col-3 pl-5">
                        <p className="order-detail-header">Payment Mode</p>
                        <p>Cash On Delivery</p>
                    </div>
                    <div className="col-3 pl-5">
                        <p className="order-detail-header">Order Summary</p>
                        <p>Items Subtotal: </p>
                        <p>Shipping: </p>
                        <p>Total: </p>
                        <p>Discount: </p>
                        <hr />
                        <p>Grand Total: </p>
                    </div>
                    <div className="col-3 pl-5">
                        <p className="order-detail-header">Rupees </p>
                        <p>₹ {price}</p>
                        <p>₹ {shippingCharge}</p>
                        <p>₹ {totalAmount}</p>
                        <p>₹ 0</p>
                        <hr />
                        <p>₹ {totalAmount}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
function getColorByOrderStatus(status) {
    let color = 'light'
    switch (status) {
        case 'delivered':
            color = 'success'
            break;

        case 'cancelled':
            color = 'danger'
            break;

        case 'pending':
            color = 'warning'
            break;

        case 'shipped':
            color = 'primary'
            break;

        case 'hold':
            color = 'secondary'
            break;

        case 'deleted':
            color = "dark"
            break;

        default:
            color = 'light'
            break;

    }
    return color
}
export default ViewOrderOrg;
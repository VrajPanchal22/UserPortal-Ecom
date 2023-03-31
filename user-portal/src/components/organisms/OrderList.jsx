import { NavLink } from "react-router-dom";
import {Button} from "reactstrap";
function OrderList({ _Id, status, orderDate, deliveryDate, price, name ,imageurl,item}) {
  return (
    <div
      class="order-list-items"
      id="order-list-items"
    >
      <div class="container-fluid" id="order-item">
        <div class="row" id="olrow1">
          <div class="col-sm-4">
            <h6>Delivered on {deliveryDate}</h6>
          </div>
          <div class="col-sm-8">
            <NavLink to={{pathname:"/orders/Invoice",state:{pass:"123"}}} target='_blank' className="invoice-link">
              Invoice
            </NavLink>
          </div>
        </div>
        <div class="row" id="olrow2">
          <div class="col-sm-3">
            <div class="image-container">
              <img
                class="product-img"
                src="/assets/images/watch.jpg"
                alt="SmartWatch"
              />
            </div>
          </div>
          <div class="col-sm-5">
            <div class="product-info">
              <h6>{name}</h6>
              <Button className='btn my-2 my-sm-0 view-item'>View Item</Button>
              <Button className='btn my-2 my-sm-0 buy-again'>Buy It Again</Button>  
            </div>
          </div>
          <div class="col-sm-4">
            <div class="order-product-details">
              <div class="detail-item">ORDER_ID: {_Id}</div>
              <div class="detail-item">Price:Rs {price}</div>
              <div class="detail-item">Status: {status}</div>
              <div class="detail-item">Placed Order On: {orderDate}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderList;

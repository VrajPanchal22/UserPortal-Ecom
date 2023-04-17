import { useNavigate } from "react-router-dom";
import {Button} from "reactstrap";

function EmptyOrders(){
  const navigate = useNavigate();
    return( <div className="empty-order-list">
    <div className="d-flex flex-column justify-content-center align-items-center no-order-container">
      <div className="no-order-img">
        <img src="/assets/images/NoOrders3.png"
          className="no-order-image" alt="no-order" />

      </div>
      <h3>You have no orders</h3>
        <div class="start-shopping-btn-container">
          <Button className="btn button-start-shopping" onClick={navigate('/productGallary')} >
            Start Shopping
          </Button>
        </div>
    </div>
  </div>)

}
export default EmptyOrders;
import Loader from "../atoms/Loader";
import { useState,useEffect } from "react";
import { GetOrderById } from "../../services/Order";
import ViewOrderOrg from "../organisms/ViewOrderOrg";
import { useLocation } from "react-router-dom";
function OrderDetails() {
    const location = useLocation()
    const [orderdetails, setOrderDetails] = useState([])
    const [dataFetched, setDataFetched] = useState(false);
    const orderId = location.search.slice(1);
    useEffect(() => {
      fetchOrder(`http://localhost:4000/api/order/admin/${orderId}`);
    }, [])
  
    async function fetchOrder(url) {
      let resp = await GetOrderById(url)
      setOrderDetails(resp.data.details);
      setDataFetched(true);
      set_Id(resp.data.details._Id)
    }
  
    const [_Id, set_Id] = useState("");

    return (<>
       {
        dataFetched?<div>
            {
                orderdetails.map((order)=>{
                    return <ViewOrderOrg obj = {order}/>
                })
            }
        </div> :<Loader/>
       }
    </>)
}
export default OrderDetails;
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GetOrderById } from "../../services/Order";
import Loader from "../atoms/Loader";
import InvoiceOrg from "../organisms/InvoiceOrg";

function Invoice() {
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


  return (
    <div>{
      dataFetched ?
        <div>
          {
            orderdetails.map((order) => {
              return <InvoiceOrg obj={order} />
            })
          }

        </div> : <Loader />
    }


    </div>
  );
}
export default Invoice;

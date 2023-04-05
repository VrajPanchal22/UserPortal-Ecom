import ReactToPrint from "react-to-print";
import { useRef } from "react";
import { Button } from "reactstrap";
import moment from "moment";
function InvoiceOrg(props){
  let srNo = 1
  const {billingAddress:{residenceNo,residenceName,area,city,country,pincode,state,street}}= props.obj;
  console.log(residenceNo,residenceName,area,city,country,pincode,state,street)
  const {_Id,orderDate,deliveryDate,shippingCharge,totalAmount,paymentId,products:[{sellerId,productId,name,category}],variant:[{price,quantity}]}= props.obj;
  console.log(_Id,orderDate,deliveryDate,productId,sellerId,name,price,quantity,category)
  const invoiceRef = useRef();
  const handlePrint = () => {
    window.print();
  };
    return(<>
    <div>
    <div ref={invoiceRef} className="container-fluid">
    <div className="row  p-3 m-3">
      <div className="col-6 d-flex justify-content-left align-items-center pt-3">
        <img
          src="/assets/images/logo1.png"
          alt="Logo"
          className="invoice-logo"
        />
      </div>
      <div className="col-6 d-flex justify-content-end align-items-center pt-3">
        <h1>Tax Invoice/Bill of Supply/Cash Memo</h1>
      </div>
    </div>
    <br /> <br />
    <div className="row m-3">
      <div className="col-6">
        <p>
          <strong>Order ID</strong> : {_Id}
        </p>
        <p>
          <strong>Order Date</strong> : {moment(orderDate).format("MM-DD-YYYY")}
        </p>
        <p>
          <strong>Delivery Date</strong> : {moment(deliveryDate).format("MM-DD-YYYY")}
        </p>
        <p>
          <strong>payment Id</strong> : {paymentId}
        </p>

        <p>
          <strong>Sold By :</strong>{" "}
          <span>
            <strong>Boat Pvt Ltd</strong>
          </span>
          <br/>
          <p>
          Plot no. 120 X and part portion of plot no. 119 W2, Gallops
          Industrial Park 1, Village Rajoda, Taluka Bavla, District
          Ahmedabad Ahmedabad, GUJARAT, 382220 IN
          </p>
         
        </p>
      </div>
      <div className="col-2"></div>
      <div className="col-4">
        <p>
          <strong>Billing Address</strong>
        </p>
        <p>
          <address>
            {residenceNo} {residenceName} , {street}
            , {area} {city}, {state}, {pincode} {country}
          </address>
        </p>
        <p>
          <strong>Shipping Address</strong>
        </p>
        <p>
          <address>
          {residenceNo} {residenceName} , {street}
            , {area} {city}, {state}, {pincode} {country}
          </address>
        </p>
      </div>
    </div>
    <div className="row p-3 m-3">
      <div className="col-12 d-flex justify-content-center align-item-center">
        <table border="1">
          <thead>
            <tr key="thead">
              <th className="p-1 text-center">Sr. No</th>
              <th className="p-1 text-center">Product Name</th>
              <th className="p-1 text-center">Unit price</th>
              <th className="p-1 text-center">Discount</th>
              <th className="p-1 text-center">Qty</th>
              <th className="p-1 text-center">Shipping charge</th>
              <th className="p-1 text-center">Total Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr key="order1">
              <td className="p-1 text-left">{srNo}</td>
              <td className="p-1 text-left" style={{ maxWidth: '500px' }}>
                {name}
              </td>
              <td className="p-1 text-center">{price} Rs</td>
              <td className="p-1 text-center">0 Rs</td>
              <td className="p-2 text-center">{quantity}</td>
              <td className="p-1 text-center">{shippingCharge} Rs</td>
              <td className="p-1 text-center">{totalAmount} Rs</td>

            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div className="d-flex flex-row justify-content-center align-items-center">
    <ReactToPrint
      trigger={() => (
        <Button onClick={() => handlePrint()}>Download Pdf</Button>
      )}
      content={() => invoiceRef.current}
    />
  </div>
  </div></>)
    

}
export default InvoiceOrg;
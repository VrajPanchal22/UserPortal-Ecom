import { useRef } from "react";
import ReactToPrint from "react-to-print";
import { Button } from "reactstrap";

function Invoice() {
  const invoiceRef = useRef();
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
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
              <strong>Order ID</strong> : BBOR202300001
            </p>
            <p>
              <strong>Order Date</strong> : 17 Jan 2023
            </p>
            <p>
              <strong>Delivery Date</strong> : 19 Jan 2023
            </p>

            <p>
              <p>
                <strong>Sold By :</strong>{" "}
              </p>
              <p>
                <strong>Boat Pvt Ltd</strong>
              </p>
              Plot no. 120 X and part portion of plot no. 119 W2, Gallops
              Industrial Park 1, Village Rajoda, Taluka Bavla, District
              Ahmedabad Ahmedabad, GUJARAT, 382220 IN
            </p>
          </div>
          <div className="col-2"></div>
          <div className="col-4">
            <p>
              <strong>Billing Address</strong>
            </p>
            <p>
              <address>
                Rahul Sharma G-301 Shree Hari Residency , Near Pratham Paradise
                , Tarsali VADODARA, GUJARAT, 390009 IN
              </address>
            </p>
            <p>
              <strong>Shipping Address</strong>
            </p>
            <p>
              <address>
                Rahul Sharma G-301 Shree Hari Residency , Near Pratham Paradise
                , Tarsali VADODARA, GUJARAT, 390009 IN
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
                  <td className="p-1 text-left">1</td>
                  <td className="p-1 text-left" style={{maxWidth:'500px'}}>
                    ZEBRONICS Zeb-Thunder Bluetooth Wireless Over The Ear
                    Headphone FM, mSD, 9 hrs Playback with Mic (Blue with Red) |
                    B09B5F3QBH ( B09B5F3QBH ) HSN:85176290
                  </td>
                  <td className="p-1 text-center">500 Rs</td>
                  <td className="p-1 text-center">0 Rs</td>
                  <td className="p-2 text-center">2</td>
                  <td className="p-1 text-center">50 Rs</td>
                  <td className="p-1 text-center">1050 Rs</td>
                  
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
    </>
  );
}
export default Invoice;

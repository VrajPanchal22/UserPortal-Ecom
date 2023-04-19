import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../atoms/Navbar";
import FilterDropdown from "../atoms/FilterDropdown.jsx";
import { useEffect, useState } from "react";
import EmptyOrders from "../organisms/EmptyOrders";
import OrderList from "../organisms/OrderList";
import Search from "../molecules/SearchBar";
import { FetchOrders, SearchOrders } from "../../services/Order";
import moment from "moment";
import Pagination from "../molecules/Pagination";
import { LIMIT, OFFSET, SEARCH_URL } from "../../constants/constants";
// import '../../css/Order.css'
import { API_BASE_URL } from "../../config";

function Order() {
  let userObj = JSON.parse(localStorage.getItem("userData"));
  let userId = userObj.cartProductsInTempId
    ? userObj.cartProductsInTempId
    : userObj._id;

  const ORDER_URL = `${API_BASE_URL}order`;
  console.log(ORDER_URL);
  let [orderList, setOrderList] = useState([]);
  let [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [count, setCount] = useState(3);
  useEffect(() => {
    if (filter === "Last 30 Days") {
      setFilter("Last30");
    } else if (filter === "Filter Orders") {
      setFilter(null);
    } else {
      fetchdata(ORDER_URL, userId, LIMIT, OFFSET);
    }
  }, [filter]);
  useEffect(() => {
    SearchOrderData(SEARCH_URL, userId, LIMIT, OFFSET);
  }, [search]);

  let fetchdata = async (url, userId, limit, offset) => {
    let response = await FetchOrders(url + `/${userId}`, {
      params: { limit: limit, offset: offset, filter: filter },
    });

    setOrderList(response.data.details);
    setCount(response.data.count);

    return response.data.details;
  };
  async function SearchOrderData(url, userId, limit, offset) {
    let tempresp = await SearchOrders(url, userId, limit, offset, search);
    setOrderList(tempresp.data.details);
  }
  async function handlePage(event) {
    const newOffSet = event.selected * LIMIT;
    await fetchdata(ORDER_URL, userId, LIMIT, newOffSet, filter);
    localStorage.removeItem("ol");
    localStorage.setItem("ol", JSON.stringify(orderList));
  }

  return (
    <main>
      <div className="container">
        <div className="order-main-container">
          <div className="row d-flex flex-row justify-content-left align-items-center">
            <div className="col-sm-5 pt-3">
              <div className="order-navbar">
                <Navbar link1="Home" link2="products" link3="My Orders" />
              </div>
            </div>
            <div className="col-sm-7">
              <div className="filters-dropdown" style={{ float: "right" }}>
                <FilterDropdown
                  changeFilter={(filter) => {
                    setFilter(filter);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="order-searchbar w-100">
              <Search
                changeSearch={(value) => {
                  setSearch(value);
                }}
              />
              {console.log(filter)}
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              {orderList.length !== 0 ? (
                orderList.map((item) => {
                  return (
                    <OrderList
                      key={item._Id}
                      _Id={item._Id}
                      name={item.products[0].name}
                      price={item.variant[0].price}
                      orderDate={moment(item.orderDate).format("DD MMM YYYY")}
                      deliveryDate={moment(item.deliveryDate).format(
                        "DD MMM YYYY"
                      )}
                      status={item.status}
                      imageurl={item.products[0].image}
                      order={item}
                    />
                  );
                })
              ) : (
                <>
                  {" "}
                  <EmptyOrders />
                </>
              )}
            </div>
          </div>
          <div className="row pt-2">
            <div className="col-3"></div>
            <div className="col-6">
              {
                <Pagination
                  totalCount={100}
                  currentPage={0}
                  handlePageClick={(e) => handlePage(e)}
                />
              }
            </div>
            <div className="col-3"></div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Order;

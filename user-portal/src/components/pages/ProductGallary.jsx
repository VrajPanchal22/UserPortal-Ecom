import { useEffect, useState } from "react";
import qs from "query-string";
import FilterOptions from "../organisms/FilterOptions";
import ProductList from "../organisms/ProductList";
import ShortAndViewOptions from "../organisms/ShortAndViewOption";
import Footer from "../organisms/Footer";
import productGallaryContext from "../../contexts/productGallary";
import { useLocation } from "react-router-dom";

function ProductGallary() {
  const [productList, setProductList] = useState([]);
  const [viewOption, setViewOption] = useState("grid");
  const [filterQuery, setFilterQuery] = useState({
    Brand: [],
    Color: [],
    Size: [],
    Rate: [],
    Available: [],
  });

  const contextValue = {
    viewOption,
    setViewOption,
    filterQuery,
    setFilterQuery,
    productList,
    setProductList,
  };

  console.log("filtered", productList);

  const queryString = qs.stringify(filterQuery, { arrayFormat: "comma" });
  //=> 'foo=unicorn&ilike=pizza'

  console.log(filterQuery, "query");

  return (
    <div className=" w-100">
      <div className="main_section d-flex">
        <productGallaryContext.Provider value={contextValue}>
          <FilterOptions />
          <div class="product_section container-fluid">
            <ShortAndViewOptions />
            <ProductList query={queryString} />
          </div>
        </productGallaryContext.Provider>
      </div>
      <Footer className="footer d-flex align-items-center" />
    </div>
  );
}

export default ProductGallary;

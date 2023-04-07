import React, { useContext } from 'react'
import ProductCard from "../molecules/ProductCard";
import productGallaryContext from '../../contexts/productGallary'
import { useNavigate } from 'react-router-dom';

function SortOption() {
    const {productList, setProductList} = useContext(productGallaryContext)
    const navigate = useNavigate()
    const sortOption =['Popularity','Price--Low to High','Price--High to Low','what\'s New']

function handlePriceLowToHigh(){
    console.log("lowtohigh")
    const sortedProductList = [...productList].sort((a, b) => a.variants[0].price - b.variants[0].price);
    setProductList(sortedProductList);
}

function handlePriceHighToLow(){
    console.log("hightolow")
    const sortedProductList = [...productList].sort((a, b) => b.variants[0].price - a.variants[0].price);
  setProductList(sortedProductList);

}

function newArrival(){
    console.log("newarrival")
    const sortedProductList = [...productList].sort((a, b) => b._id.localeCompare(a._id));
  setProductList(sortedProductList);

}
    return (
        <>
            <span className="sort-by-title font-weight-bold"><b>Sort By:</b></span>
            <p>
                <button className="filter-btn btn" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    FILTER
                </button>
            </p>

            <button className="dropdown btn btn-secondary dropdown-toggle sort-by" type="button"
                id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Sort By
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {
                    sortOption.map((option)=>{
                        <a className="dropdown-item" >{option}</a>
                    })
                }
            </div>
            <div className="sort-options d-flex align-items-center">
                <div className="popularity  font-weight-bold sort-option  active-sort-option ml-5" id="popularity">Popularity</div>
                <div className="lowToHigh font-weight-bold sort-option ml-5"  id="low-to-high" onClick={()=>handlePriceLowToHigh()}>Price--Low to High</div>
                <div className="highToLow font-weight-bold sort-option ml-5"  id="high-to-low" onClick={()=>handlePriceHighToLow()}>Price--High to Low</div>
                <div className="whatsNew font-weight-bold sort-option ml-5"  id="whats-new" onClick={()=>newArrival()}>what's New</div>
            </div>
        </>
    )
}

export default SortOption

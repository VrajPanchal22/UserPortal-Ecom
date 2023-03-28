import React from 'react'
import BestSellingCard from '../molecules/BestSellingCard'
export default function BestSellingProducts() {
    return (

        <div className="container-fluid ">
            <div className="bg-light mt-5 w-100 p-4">
                <div className="d-flex justify-content-start align-items-center w-100 px-4 pt-3">
                    <h2 className="p-2 text-dark best_selling--heading">BEST SELLING PRODUCTS</h2>
                </div>
                <hr />
                <div className="d-flex justify-content-around align-items-center best_selling--box">
                    <BestSellingCard imgUrl="/assets/images/appliances.png" className="product-img" alt ="product-img" price="₹1000" productName="appliances" />
                    <BestSellingCard imgUrl="/assets/images/electronics.png" className="product-img" alt ="product-img" price="₹1000" productName="Electronics" />
                    <BestSellingCard imgUrl="/assets/images/fashion.png" className="product-img" alt ="product-img" price="₹1000" productName="Fashion" />
                    <BestSellingCard imgUrl="/assets/images/grocery.png" className="product-img" alt ="product-img" price="₹1000" productName="Grocery" />
                    <BestSellingCard imgUrl="/assets/images/home.jpg" className="product-img" alt ="product-img" price="₹1000" productName="Home" />
                </div>
            </div>
        </div>
    )
}

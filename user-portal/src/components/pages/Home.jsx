import React from 'react'
import Header from '../organisms/Header'
import OfferCarousle from '../organisms/OffersCarousle'
import DealOfTheDay from '../organisms/DealOfTheDay'
import BestSellingProducts from '../organisms/BestSellingProducts' 
import ProductsToBag from '../organisms/ProductsToBag'
import ShopByCategory from '../organisms/ShopByCategory'


export default function Home() {
    return (
        <>
            <Header />
            <OfferCarousle />
            <DealOfTheDay />
            <BestSellingProducts />
            <ProductsToBag />
            <ShopByCategory />
        </>
    )
}

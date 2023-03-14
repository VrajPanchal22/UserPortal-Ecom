import React, { useContext } from 'react'
import { FaRegHeart } from 'react-icons/fa';
import productGallaryContext from '../../contexts/productGallary'


function ProductCard({ product }) {
    const {viewOption} =useContext(productGallaryContext);
    return (
        <div className={`${viewOption==='list'?'col-12 ':' col-xl-3 col-lg-4 col-md-6 col-6 d-flex justify-content-center align-items-center'} card-div`} id={product._id}>
            <div className="card p-2 d-flex align-items-center">
                <img className="card-img-top card__img"
                    src={product.image} alt="Card image cap" />
                <div className="product-details mt-2">
                    <div className="d-flex justify-content-between mt-2">
                        <h5 className="product-brand">{product.name}</h5>
                        <FaRegHeart className='wishlist-icon'/>
                    </div>
                    <div className="d-flex" style={{height:'1.3rem'}}>
                        <div className="product-gender">{product.brand}</div>
                    </div>
                    <div className="product-price"><b>Rs.{product.variants[0].price}</b>
                    </div>
                    <div className="alertSection"></div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard

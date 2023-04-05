import React from 'react'

export default function CartSimilarProductList() {
  return (
    <>
    <div className="main-container__similar-product-div col-xl-10 col-lg-10 col-sm-10 col-md-10 m-auto container-fuild  p-3  m-4 ">
                <div className="font-weight-bold fs-6 my-4 ">You may also like:</div>
                <div className="similar-product-div__wrapper row  d-flex  mb-5  py-2">
                    
                    <div className="similar-product__card-div col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 d-flex justify-content-center align-items-center my-2 "
                        id='${product._id.$oid}'>
                        <div className="similar-product__card p-3 border bg-white ">
                            <img className="card-img-top products-image" src="/assets/images/product-1.webp"
                                alt="Card image cap"/>
                             {/* product.imageUrl */}
                            <div className=" ml-1">
                                <div className=" d-flex justify-content-between mt-2 align-items-center">
                                    <h5 className="similar-product__brand-name">Puma</h5>
                                     {/* product.brandName */}
                                    <i className="similar-product-div__wishlist-icon fa fa-heart-o"></i>
                                </div>
                                <div className="similar-product__card-details d-flex " style={{height:"1.3rem"}}>
                                    <div className="similar-product__gender">Female</div>
                                    {/* product.gender */}
                                    <div className="similar-product__type ml-2">Shoes</div>
                                    {/* product.category */}
                                </div>
                                <div className="similar-product__product-price"><b>₹ 3,599</b>
                                    {/* Rs. product.price */}
                                    <div className="similar-product__discount">20% OFF</div>
                                     {/* product.discount%OFF */}
                                </div>
                                <div className="similar-product__offer">offer alert</div>
                                {/* <button type="button"
                                    className="similar-product__add2cart-btn btn btn-sm font-weight-bold">Add to
                                    Cart</button> */}
                            </div>
                        </div>
                    </div>

                    <div className="similar-product__card-div col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 d-flex justify-content-center align-items-center my-2 "
                        id='${product._id.$oid}'>
                        <div className="similar-product__card p-3 border bg-white ">
                            <img className="card-img-top products-image" src="/assets/images/product-1.webp"
                                alt="Card image cap"/>
                             {/* product.imageUrl */}
                            <div className=" ml-1">
                                <div className=" d-flex justify-content-between mt-2 align-items-center">
                                    <h5 className="similar-product__brand-name">Puma</h5>
                                     {/* product.brandName */}
                                    <i className="similar-product-div__wishlist-icon fa fa-heart-o"></i>
                                </div>
                                <div className="similar-product__card-details d-flex " style={{height:"1.3rem"}}>
                                    <div className="similar-product__gender">Female</div>
                                    {/* product.gender */}
                                    <div className="similar-product__type ml-2">Shoes</div>
                                    {/* product.category */}
                                </div>
                                <div className="similar-product__product-price"><b>₹ 3,599</b>
                                    {/* Rs. product.price */}
                                    <div className="similar-product__discount">20% OFF</div>
                                     {/* product.discount%OFF */}
                                </div>
                                <div className="similar-product__offer">offer alert</div>
                                {/* <button type="button"
                                    className="similar-product__add2cart-btn btn btn-sm font-weight-bold">Add to
                                    Cart</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="similar-product__card-div col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 d-flex justify-content-center align-items-center my-2 "
                        id='${product._id.$oid}'>
                        <div className="similar-product__card p-3 border bg-white ">
                            <img className="card-img-top products-image" src="/assets/images/product-1.webp"
                                alt="Card image cap"/>
                             {/* product.imageUrl */}
                            <div className=" ml-1">
                                <div className=" d-flex justify-content-between mt-2 align-items-center">
                                    <h5 className="similar-product__brand-name">Puma</h5>
                                     {/* product.brandName */}
                                    <i className="similar-product-div__wishlist-icon fa fa-heart-o"></i>
                                </div>
                                <div className="similar-product__card-details d-flex " style={{height:"1.3rem"}}>
                                    <div className="similar-product__gender">Female</div>
                                    {/* product.gender */}
                                    <div className="similar-product__type ml-2">Shoes</div>
                                    {/* product.category */}
                                </div>
                                <div className="similar-product__product-price"><b>₹ 3,599</b>
                                    {/* Rs. product.price */}
                                    <div className="similar-product__discount">20% OFF</div>
                                     {/* product.discount%OFF */}
                                </div>
                                <div className="similar-product__offer">offer alert</div>
                                {/* <button type="button"
                                    className="similar-product__add2cart-btn btn btn-sm font-weight-bold">Add to
                                    Cart</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="similar-product__card-div col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 d-flex justify-content-center align-items-center my-2 "
                        id='${product._id.$oid}'>
                        <div className="similar-product__card p-3 border bg-white ">
                            <img className="card-img-top products-image" src="/assets/images/product-1.webp"
                                alt="Card image cap"/>
                             {/* product.imageUrl */}
                            <div className=" ml-1">
                                <div className=" d-flex justify-content-between mt-2 align-items-center">
                                    <h5 className="similar-product__brand-name">Puma</h5>
                                     {/* product.brandName */}
                                    <i className="similar-product-div__wishlist-icon fa fa-heart-o"></i>
                                </div>
                                <div className="similar-product__card-details d-flex " style={{height:"1.3rem"}}>
                                    <div className="similar-product__gender">Female</div>
                                    {/* product.gender */}
                                    <div className="similar-product__type ml-2">Shoes</div>
                                    {/* product.category */}
                                </div>
                                <div className="similar-product__product-price"><b>₹ 3,599</b>
                                    {/* Rs. product.price */}
                                    <div className="similar-product__discount">20% OFF</div>
                                     {/* product.discount%OFF */}
                                </div>
                                <div className="similar-product__offer">offer alert</div>
                                {/* <button type="button"
                                    className="similar-product__add2cart-btn btn btn-sm font-weight-bold">Add to
                                    Cart</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="similar-product__card-div col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 d-flex justify-content-center align-items-center my-2 "
                        id='${product._id.$oid}'>
                        <div className="similar-product__card p-3 border bg-white ">
                            <img className="card-img-top products-image" src="/assets/images/product-1.webp"
                                alt="Card image cap"/>
                             {/* product.imageUrl */}
                            <div className=" ml-1">
                                <div className=" d-flex justify-content-between mt-2 align-items-center">
                                    <h5 className="similar-product__brand-name">Puma</h5>
                                     {/* product.brandName */}
                                    <i className="similar-product-div__wishlist-icon fa fa-heart-o"></i>
                                </div>
                                <div className="similar-product__card-details d-flex " style={{height:"1.3rem"}}>
                                    <div className="similar-product__gender">Female</div>
                                    {/* product.gender */}
                                    <div className="similar-product__type ml-2">Shoes</div>
                                    {/* product.category */}
                                </div>
                                <div className="similar-product__product-price"><b>₹ 3,599</b>
                                    {/* Rs. product.price */}
                                    <div className="similar-product__discount">20% OFF</div>
                                     {/* product.discount%OFF */}
                                </div>
                                <div className="similar-product__offer">offer alert</div>
                                {/* <button type="button"
                                    className="similar-product__add2cart-btn btn btn-sm font-weight-bold">Add to
                                    Cart</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="similar-product__card-div col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-6 col-6 d-flex justify-content-center align-items-center my-2 "
                        id='${product._id.$oid}'>
                        <div className="similar-product__card p-3 border bg-white ">
                            <img className="card-img-top products-image" src="/assets/images/product-1.webp"
                                alt="Card image cap"/>
                             {/* product.imageUrl */}
                            <div className=" ml-1">
                                <div className=" d-flex justify-content-between mt-2 align-items-center">
                                    <h5 className="similar-product__brand-name">Puma</h5>
                                     {/* product.brandName */}
                                    <i className="similar-product-div__wishlist-icon fa fa-heart-o"></i>
                                </div>
                                <div className="similar-product__card-details d-flex " style={{height:"1.3rem"}}>
                                    <div className="similar-product__gender">Female</div>
                                    {/* product.gender */}
                                    <div className="similar-product__type ml-2">Shoes</div>
                                    {/* product.category */}
                                </div>
                                <div className="similar-product__product-price"><b>₹ 3,599</b>
                                    {/* Rs. product.price */}
                                    <div className="similar-product__discount">20% OFF</div>
                                     {/* product.discount%OFF */}
                                </div>
                                <div className="similar-product__offer">offer alert</div>
                                {/* <button type="button"
                                    className="similar-product__add2cart-btn btn btn-sm font-weight-bold">Add to
                                    Cart</button> */}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
    </>
  )
}

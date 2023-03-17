import React from 'react'
import ImgTag from '../atoms/ImgTag'

export default function BestSellingCard({imgUrl,className,alt,price,productName}) {
    return (
        <div className="d-flex flex-column align-items-center item card best_selling_box--card">
            <ImgTag imgUrl={imgUrl} className={className} alt={alt}  />
            <div className="text-center w-100 pt-3">
                <p className="product-price"><strong>{price}</strong></p>
                <p className="product-name"><strong>{productName}</strong></p>
            </div>
        </div>

    )
}

import React from 'react'
import HalfCircle from '../atoms/HalfCircle'
import ImgTag from '../atoms/ImgTag'

export default function ShopByCategoryCard({ imgUrl, className, alt, halfCircleClass, productName, offer }) {
  return (

    <div class="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 mt-2">
      <div class="card category-card">
        <ImgTag imgUrl={imgUrl} className={className} alt={alt} />
        <HalfCircle halfCircleClass={halfCircleClass} productName={productName} offer={offer} />
      </div>
    </div>

  )
}

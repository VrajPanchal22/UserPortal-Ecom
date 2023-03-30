import React from 'react'
import ImgTag from '../atoms/ImgTag'

export default function CircleCard({imgUrl, className, alt, text}) {
    return (
        <div className="col-6 col-sm-4 col-md-3 col-lg-3 col-xl-2 d-flex align-items-center justify-content-center">
            <div className="circle-box">
                <ImgTag imgUrl={imgUrl} className={className} alt={alt} />
                <h4 className="text-light pb-3"><strong className="circle_box--price">{text}</strong></h4>
            </div>
        </div>
    )
}

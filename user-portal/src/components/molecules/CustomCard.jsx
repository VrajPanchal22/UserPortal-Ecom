import React from 'react'
import ImgTag from '../atoms/ImgTag'

export default function CustomCard( {imgUrl, className,width,alt, productName, productOffer, cardClass,onClick}) {
    return (
        // <div className="row p-4">
            <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 d-flex justify-content-center align-items-center" onClick={onClick}>
                <div className={`card ${cardClass} d-flex justify-content-center align-items-center`}>
                    <ImgTag imgUrl={imgUrl} className={className} width={width} alt={alt} />
                    <div className="w-100">
                        <div className="card-content p-2">
                            <p>{productName}</p>
                            <strong>{productOffer}</strong>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    )
}

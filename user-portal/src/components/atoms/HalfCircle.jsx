import React from 'react'

export default function HalfCircle({halfCircleClass, productName, offer }) {
    return (
        <div className={halfCircleClass}>
            <h5 className="h5" id="tops">{productName}</h5>
            <h4>{offer}</h4>
            <h5>Shop Now</h5>
        </div>
    )
}

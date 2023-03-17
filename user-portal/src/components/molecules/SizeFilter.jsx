import React from 'react'

function SizeFilter() {
    const sizes = ['2XL', '2XS', '3XL', '3XS', '4XL', 'FREE SIZE', 'L', 'M', 'S', 'XL', 'XS'];
    return (
        <div className=" filter-option">
            <span className="filter-name m-2"><b>SIZE</b></span><br />
            {
                sizes.map((size) => {
                    return (
                        <>
                            <input type="checkbox" className="mx-2" />{size}<br />
                        </>
                    )
                })
            }
        </div>
    )
}

export default SizeFilter

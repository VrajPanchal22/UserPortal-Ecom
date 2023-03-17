import React from 'react'
import InputTag from '../atoms/InputTag'

function BrandFilter() {
    const brands = ['BIBA', 'LIBAS', 'LEVIS', 'W', 'HRX'];
    return (
        <div className='filter-option'>
            <div className="d-flex justify-content-between">
                <span className="filter-name m-2"><b>BRAND</b></span>
                <span className="clearAll_btn m-2" style={{color:'var(--button-color)'}}><b>CLEAR ALL</b></span>
            </div>
            {
                brands.map((brand , index) => {
                    return (
                        <>
                            <InputTag type="checkbox" className="mx-2" key={index} />{brand}<br />
                        </>
                    )
                })
            }
        </div>
    )
}

export default BrandFilter

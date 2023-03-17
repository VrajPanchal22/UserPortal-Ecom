import React from 'react'
import InputTag from '../atoms/InputTag';

function GenderFilter() {
    const options = ['Men', 'Women', 'kid'];
    return (
        <div className='filter-option'>
            <span className="filter-name m-2"><b>GENDER</b></span><br />
            {options.map((option , index) => {
                return (
                    <>
                        <InputTag type="radio" className="mx-2 gender-option" name="radio2" value={option} key={index} />{option}<br />
                    </>
                )
            })
            }
        </div>
    )
}

export default GenderFilter

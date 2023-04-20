import React from 'react'
import { useContext } from 'react';
import productGallaryContext from '../../contexts/productGallary';
import InputTag from '../atoms/InputTag';

function GenderFilter() {
    const { filterQuery, setFilterQuery}= useContext(productGallaryContext)
    const options = ['men', 'women', 'kid'];
    return (
        <div className='filter-option'>
            <span className="filter-name m-2"><b>GENDER</b></span><br />
            {options.map((option, index) => {
                return (
                    <>
                        <InputTag type="radio" className="mx-2 gender-option" name="radio2" value={option} key={index} onClick={() => setFilterQuery(prevState => ({ ...prevState, ['Gender']: option.toLowerCase() }))} checked={filterQuery.Gender === option}/>{option.charAt(0).toUpperCase() + option.slice(1)}<br />
                    </>
                )
            })
            }
        </div>
    )
}

export default GenderFilter

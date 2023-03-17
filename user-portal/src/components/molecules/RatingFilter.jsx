import React from 'react'
import InputTag from '../atoms/InputTag'

function RatingFilter() {
    const rating = [4, 3, 2];
    return (
        <div class="filter-option">
            <span class="filter-name m-2"><b>CUSTOMER RATING</b></span><br />
            {
                rating.map((rate) => {
                    return (
                        <>
                            <InputTag type="checkbox" class="mx-2" /> {rate}& above<br />
                        </>
                    )
                })
            }
        </div>
    )
}

export default RatingFilter

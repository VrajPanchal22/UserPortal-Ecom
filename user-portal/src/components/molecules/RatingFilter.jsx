import React, { useContext } from 'react'
import productGallaryContext from '../../contexts/productGallary';
import InputTag from '../atoms/InputTag'

function RatingFilter() {
    const {ilterQuery,setFilterQuery}= useContext(productGallaryContext)
    const rating = [4, 3, 2];
    return (
        <div class="filter-option">
            <span class="filter-name m-2"><b>CUSTOMER RATING</b></span><br />
            {
                rating.map((rate) => {
                    return (
                        <>
                            <InputTag type="checkbox" class="mx-2" 
                            onClick={(event) => {
                                const isChecked = event.target.checked;
                                if (isChecked) {
                                  setFilterQuery((prevState) => ({
                                    ...prevState,
                                    Rate: [...prevState.Rate, rate],
                                  }));
                                } else {
                                  setFilterQuery((prevState) => ({
                                    ...prevState,
                                    Rate: prevState.Rate.filter(
                                      (selectedRate) => selectedRate !== rate
                                    ),
                                  }));
                                }
                              }}/> {rate}& above<br />
                        </>
                    )
                })
            }
        </div>
    )
}

export default RatingFilter

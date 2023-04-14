import React, { useContext } from 'react'
import productGallaryContext from '../../contexts/productGallary'

function AvailabilityFilter() {
  const {ilterQuery,setFilterQuery}= useContext(productGallaryContext)

  return (
    <div class="filter-option">
    <span class="filter-name m-2"><b>AVAILABILITY</b></span><br/>
    <input type="checkbox" class="mx-2 mb-3 available-option" 
    onClick={(event) => {
      const isChecked = event.target.checked;
      if (isChecked) {
        setFilterQuery((prevState) => ({
          ...prevState,
          Available: [...prevState.Available,'Include Out of Stock' ],
        }));
      } else {
        setFilterQuery((prevState) => ({
          ...prevState,
          Available: prevState.Available.filter(
            (selectedAvailable) => selectedAvailable !== 'Include Out of Stock'
          ),
        }));
      }
    }}/> Include Out of Stock<br/>
</div>
  )
}

export default AvailabilityFilter

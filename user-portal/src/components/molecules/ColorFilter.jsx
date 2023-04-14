import React, { useContext } from 'react'
import productGallaryContext from '../../contexts/productGallary'
import InputTag from '../atoms/InputTag'

function ColorFilter() {
    const {ilterQuery,setFilterQuery}= useContext(productGallaryContext)
    const colors = ['black', 'pink', 'red', 'white', 'grey', 'blue', 'violet', 'row']
    return (
        <div className="filter-option">
            <span className="filter-name m-2"><b>COLOR</b></span>
            {colors.map((color) => {
                return (
                    <div className="colorfilter d-flex flex-row align-items-center ">
                        <InputTag type="checkbox" className="mx-2 color-option" onClick={(event) => {
            const isChecked = event.target.checked;
            if (isChecked) {
              setFilterQuery((prevState) => ({
                ...prevState,
                Color: [...prevState.Color, color],
              }));
            } else {
              setFilterQuery((prevState) => ({
                ...prevState,
                Color: prevState.Color.filter(
                  (selectedColor) => selectedColor !== color
                ),
              }));
            }
          }} />
                        <div className="filterColor1 border border-secondary rounded-circle mx-2"
                            style={{ backgroundColor: `${color}`, height: '0.9rem', width: '0.9rem' }}></div>{color}<br />
                    </div>
                )
            })
            }
        </div>
    )
}

export default ColorFilter

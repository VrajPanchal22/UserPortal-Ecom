import React from 'react'
import { FaSearch } from "react-icons/fa";

function SearchField() {
    return (
        <div className='shadow px-2 search-box'>
            <input  type="text"
                placeholder="Search for products brand & more.."
                name="category"
                id="category" 
            />
            <FaSearch className="search-icon" />
        </div>
    )
}


export default SearchField
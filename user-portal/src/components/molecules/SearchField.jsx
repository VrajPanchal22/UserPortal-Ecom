import React from 'react'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

function SearchField({ type, placeholder, id, onChange, value }) {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (value) {
            navigate(`/productGallary/${value}`)
        }
    }
    return (
        <form className='shadow px-2 search-box' onSubmit={(e) => handleSubmit(e)} autoComplete="off">
            <input type={type}
                placeholder={placeholder}
                id={id}
                value={value}
                onChange={onChange}
            />
            <button type="submit" className='search-button' >
                <FaSearch className="search-icon" />
            </button>
        </form>
    )
}


export default SearchField
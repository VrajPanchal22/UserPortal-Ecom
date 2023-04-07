import React from 'react'
import GenderFilter from '../molecules/GenderFilter'
import BrandFilter from  '../molecules/BrandFilter'
import PriceRangeFilter from '../molecules/PriceRangeFilter'
import ColorFilter from '../molecules/ColorFilter'
import DiscountFilter from '../molecules/DiscountFilter'
import SizeFilter from '../molecules/SizeFilter'
import RatingFilter from '../molecules/RatingFilter'
import ClearAllFilter from '../molecules/ClearAllFilter'
import AvailabilityFilter from '../molecules/AvailabilityFilter'

function FilterOptions() {

    return (
        <div className="sidebar border rounded">
            <ClearAllFilter />
            <GenderFilter />
            <BrandFilter />
            <PriceRangeFilter />
            <ColorFilter />
            <DiscountFilter />
            <SizeFilter />
            <RatingFilter />
            <AvailabilityFilter />
        </div>
    )
}

export default FilterOptions

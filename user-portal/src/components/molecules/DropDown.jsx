import React from 'react'
import DropdownContent from '../atoms/DropdownContent'
import DropdownHeading from '../atoms/DropdownHeading'

export default function DropDown({ className, title, data }) {
    return (
        <>
            <DropdownHeading className={className} title={title} />
            <div className="dropdown-content">
                <DropdownContent data={data} />
            </div>
        </>
    )
}

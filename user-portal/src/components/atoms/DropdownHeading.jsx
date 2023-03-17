import React from 'react'

export default function DropdownHeading({ className, title }) {
    return (
        <span className={className}>{title} <i className="fa fa-caret-down"></i></span>
    )
}

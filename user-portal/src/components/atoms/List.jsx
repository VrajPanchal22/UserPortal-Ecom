import React from 'react'

export default function List({ className, anchoreClassName, menuName, icon , handleClick, spanClassName, spanValue }) {
    return (
        <li className={className}>
            <a className={anchoreClassName} href="#" onClick={handleClick}> {icon}
                <strong> {menuName}</strong>
            </a>
            <span className={spanClassName}>{spanValue}</span>
        </li>
    )
}

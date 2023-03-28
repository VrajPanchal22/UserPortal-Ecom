import React from 'react'

export default function List({ className, anchoreClassName, menuName, icon , handleClick }) {
    return (
        <li className={className}>
            <a className={anchoreClassName} href="#" onClick={handleClick}> {icon}
                <strong> {menuName}</strong>
            </a>
        </li>
    )
}

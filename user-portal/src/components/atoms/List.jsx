import React from 'react'

export default function List({ className, anchoreClassName, menuName, icon }) {
    return (
        <li className={className}>
            <a className={anchoreClassName} href="#"> {icon}
                <strong> {menuName}</strong>
            </a>
        </li>
    )
}

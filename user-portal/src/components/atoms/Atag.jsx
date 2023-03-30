import React from 'react'
function Atag(props) {
    const {href, className, children, aText,onClick } = props
  return (
    <a href={href} className={className} onClick={onClick}>{children} {aText}</a>
  )
}
export default Atag
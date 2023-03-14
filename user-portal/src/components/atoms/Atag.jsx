import React from 'react'
function Atag(props) {
    const {href, className, children, aText } = props
  return (
    <a href={href} className={className}>{children} {aText}</a>
  )
}
export default Atag
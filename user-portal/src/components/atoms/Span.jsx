import React from 'react'

function Span(props) {
    const {className,para,icon,onClick} = props;
  return (
      <span className={className} onClick={onClick}>{para}{icon}</span>
  )
}

export default Span
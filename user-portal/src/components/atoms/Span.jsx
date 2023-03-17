import React from 'react'

function Span(props) {
    const {className,para,icon} = props;
  return (
      <span className={className}>{para}{icon}</span>
  )
}

export default Span
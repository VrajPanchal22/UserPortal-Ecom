import React from 'react'

function Para(props) {
    const {para,className} = props;
  return (
      <p style={{ marginBottom: '0.25rem'}} className={className}>{para}</p>
  )
}

export default Para
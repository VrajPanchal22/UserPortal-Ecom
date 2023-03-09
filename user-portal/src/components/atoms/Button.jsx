import React from 'react'

function Button(props) {
    const {buttonText,...rest }= props;
  return (
   <button {...rest}>{buttonText}</button>
  )
}

export default Button

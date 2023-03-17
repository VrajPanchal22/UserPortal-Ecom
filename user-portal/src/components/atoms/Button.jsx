import React from 'react'

function Button(props) {
    const {buttonText,onClick,...rest }= props;
  return (
   <button onClick={onClick} {...rest}>{buttonText}</button>
  )
}

export default Button

import React from 'react'

function Button(props) {
    const {type , className,buttonText,icon,onClick }= props;
    // console.log(onClick)
  return (
   <button type={type} className={className} onClick={onClick}>{icon} {buttonText}</button>
  )
}

export default Button

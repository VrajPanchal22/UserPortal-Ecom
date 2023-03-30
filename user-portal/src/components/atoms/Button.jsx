import React from "react";

function Button(props) {
    const {buttonText,onClick,icon,...rest }= props;
  return (
   <button onClick={onClick} {...rest}>{icon}{buttonText}</button>
  )
}

export default Button;

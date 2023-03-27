import React from "react";

function Button(props) {
  const { type, className, buttonText, icon, onClick } = props;
  return (
    <button type={type} className={className} onClick={onClick}>
      {icon}
      {buttonText}
    </button>
  );
}

export default Button;

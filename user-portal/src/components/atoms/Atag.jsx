import React from "react";
function Atag(props) {
  const { href, className, children, aText, onClick, id } = props;
  return (
    <a href={href} className={className} onClick={onClick} id={id}>
      {children} {aText}
    </a>
  );
}
export default Atag;

import React from "react";
import Atag from "../atoms/Atag";
import ImgTag from "../atoms/ImgTag";

export default function Carticon(props) {
  const { src, alt, aText, className, href, imgClassName } = props;
  return (
    <>
      <Atag href={href} className={className} aText={aText}>
        <ImgTag className={imgClassName} imgUrl={src} alt={alt} />
      </Atag>
    </>
  );
}

import React from 'react'

function ImgTag(props) {
    const {imgUrl,altText ,className, width,height,index,onClick} = props;
  return (
    <img className={className} width={width} src={imgUrl} alt={altText} height={height} key={index} onClick={onClick}/>
  )
}

export default ImgTag

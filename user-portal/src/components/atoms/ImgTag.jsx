import React from 'react'

function ImgTag(props) {
    const {imgUrl,altText ,className, width,height,index,onclick} = props;
  return (
    <img className={className} width={width} src={imgUrl} alt={altText} height={height} key={index} onClick={onclick}/>
  )
}

export default ImgTag

import React from 'react'

function ImgTag(props) {
    const {imgUrl,altText ,className}= props;
    console.log(imgUrl,altText,className)
  return (
    <img className={className} src={imgUrl} alt={altText} />
  )
}

export default ImgTag

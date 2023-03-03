import React from 'react'
import ImgTag from '../atoms/ImgTag';

function SocialIcon(props) {
    const {divClass,imgClass, urlArr} =props;
    console.log(urlArr.length , divClass,imgClass);
  return (
    <div className={divClass}>
      { urlArr.map((image)=>{
        console.log(image)
        return (<ImgTag className={imgClass} src={`../../../public/assets/images/${image}`} alt={image} />)
      }) }
    </div>
  )
}

export default SocialIcon

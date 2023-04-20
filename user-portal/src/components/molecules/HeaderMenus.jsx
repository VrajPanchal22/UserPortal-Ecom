import React from 'react'
import Title from '../atoms/Title'
import ImgTag from '../atoms/ImgTag'

export default function HeaderMenus({ imgUrl, width,height, titleClassName, title,onClick }) {
    return (
        <>
            <ImgTag imgUrl={imgUrl} width={width} height={height} onClick={onClick}/>
            <Title titleClassName={titleClassName} title={title} />
        </>
    )
}

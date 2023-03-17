import React from 'react'
import Title from '../atoms/Title'
import ImgTag from '../atoms/ImgTag'

export default function HeaderMenus({ imgUrl, width, titleClassName, title }) {
    return (
        <>
            <ImgTag imgUrl={imgUrl} width={width} />
            <Title titleClassName={titleClassName} title={title} />
        </>
    )
}

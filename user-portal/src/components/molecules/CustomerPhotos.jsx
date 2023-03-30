import ImgTag from '../atoms/ImgTag'
function CustomerPhotos(){
    return(
<div className="d-flex">
<ImgTag imgUrl="/assets/images/shirt.jpeg" className="mb-2 mr-1" height="100rem" />
<ImgTag imgUrl="/assets/images/shirt.jpeg" className="mb-2 mr-1" height="100rem"/>
<ImgTag imgUrl="/assets/images/shirt.jpeg" className="mb-2 mr-1" height="100rem"/>
<ImgTag imgUrl="/assets/images/shirt.jpeg" className="mb-2 mr-1" height="100rem"/>
</div>
    )
}

export default CustomerPhotos
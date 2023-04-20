import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import CustomCard from '../molecules/CustomCard'

export default function DealOfTheDay() {

    const navigate = useNavigate()

    return (
        <section className="container-fluid mt-5">
            <div className="mb-3 p-4">
                <h2 className="day_deal-heading">DEAL OF THE DAY</h2>
                <hr />
            </div>
            <div className="row p-4">
                <CustomCard imgUrl="/assets/images/dod-shoes.jpg"
                    className="card-img-top"
                    alt="Card image"
                    width="100%"
                    productName="Shoes"
                    productOffer="Min 40% off"
                    cardClass="day_deal--card"
                    onClick={()=>navigate("/productGallary/shoes")}
                />
                <CustomCard imgUrl="assets/images/dod-tshirt.jpg"
                    className="card-img-top"
                    alt="Card image"
                    width="100%"
                    productName="Tshirt"
                    productOffer="Min 40% off"
                    cardClass="day_deal--card"
                    onClick={()=>navigate("/productGallary/tshirt")}
                />
                <CustomCard imgUrl="assets/images/dod-shirt.jpg"
                    className="card-img-top"
                    alt="Card image"
                    width="100%"
                    productName="Shirt"
                    productOffer="Min 40% off"
                    cardClass="day_deal--card"
                    onClick={()=>navigate("/productGallary/shirt")}
                />

                <CustomCard imgUrl="assets/images/dod-jeans.jpg"
                    className="card-img-top"
                    alt="Card image"
                    width="100%"
                    productName="jeans"
                    productOffer="Min 40% off"
                    cardClass="day_deal--card"
                    onClick={()=>navigate("/productGallary/jeans")}
                />

                <CustomCard imgUrl="assets/images/dod-kurta.jpeg"
                    className="card-img-top"
                    alt="Card image"
                    width="100%"
                    productName="Kurta"
                    productOffer="Min 40% off"
                    cardClass="day_deal--card"
                    onClick={()=>navigate("/productGallary/kurta")}
                />

                <CustomCard imgUrl="assets/images/dod-saree.jpg"
                    className="card-img-top"
                    alt="Card image"
                    width="100%"
                    productName="Saree"
                    productOffer="Min 40% off"
                    cardClass="day_deal--card"
                    onClick={()=>navigate("/productGallary/saree")}
                />
            </div>
        </section>
    )
}

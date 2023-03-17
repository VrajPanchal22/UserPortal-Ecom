import React from 'react'
import CustomCard from '../molecules/CustomCard'

export default function DealOfTheDay() {
    return (
        <section className="container-fluid mt-5">
            <div className="mb-3 p-4">
                <h2 className="day_deal-heading">DEAL OF THE DAY</h2>
                <hr />
            </div>
            <div className="row p-4">
                <CustomCard imgUrl="assets/images/shoseB.jpeg"
                    className="card-img-top"
                    alt="Card image"
                    width="100%"
                    productName="Shoes"
                    productOffer="Min 40% off"
                    cardClass="day_deal--card"
                />
                <CustomCard imgUrl="assets/images/perfume.png"
                    className="card-img-top"
                    alt="Card image"
                    width="100%"
                    productName="Perfume"
                    productOffer="Min 40% off"
                    cardClass="day_deal--card"
                />
                <CustomCard imgUrl="assets/images/shoseB.jpeg"
                    className="card-img-top"
                    alt="Card image"
                    width="100%"
                    productName="Perfume"
                    productOffer="Min 40% off"
                    cardClass="day_deal--card"
                />

                <CustomCard imgUrl="assets/images/perfume.png"
                    className="card-img-top"
                    alt="Card image"
                    width="100%"
                    productName="Perfume"
                    productOffer="Min 40% off"
                    cardClass="day_deal--card"
                />

                <CustomCard imgUrl="assets/images/shoseB.jpeg"
                    className="card-img-top"
                    alt="Card image"
                    width="100%"
                    productName="Perfume"
                    productOffer="Min 40% off"
                    cardClass="day_deal--card"
                />

                <CustomCard imgUrl="assets/images/perfume.png"
                    className="card-img-top"
                    alt="Card image"
                    width="100%"
                    productName="Perfume"
                    productOffer="Min 40% off"
                    cardClass="day_deal--card"
                />
            </div>
        </section>
    )
}

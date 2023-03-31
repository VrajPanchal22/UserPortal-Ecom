import React from 'react'
import CircleCard from '../molecules/CircleCard'

export default function ProductsToBag() {
    return (
        <section class="container-fluid text-center mt-5">
            <div class="text-center">
                <h2>PRODUCTS TO BAG</h2>
                <p>DISCOVER NEW FAVORITES</p>
            </div>

            <div class="mt-5 row text-center">
                <CircleCard imgUrl="/assets/images/mobile.png" className="circle_box--img" alt="product-img" text="Under 199/-" />
                <CircleCard imgUrl="/assets/images/appliances.png" className="circle_box--img" alt="product-img" text="Under 199/-" />
                <CircleCard imgUrl="/assets/images/grocery.png" className="circle_box--img" alt="product-img" text="Under 199/-" />

                <CircleCard imgUrl="/assets/images/fashion.png" className="circle_box--img" alt="product-img" text="Under 199/-" />
                <CircleCard imgUrl="/assets/images/appliances.png" className="circle_box--img" alt="product-img" text="Under 199/-" />
                <CircleCard imgUrl="/assets/images/electronics.png" className="circle_box--img" alt="product-img" text="Under 199/-" />

                <CircleCard imgUrl="/assets/images/mobile.png" className="circle_box--img" alt="product-img" text="Under 199/-" />
                <CircleCard imgUrl="/assets/images/appliances.png" className="circle_box--img" alt="product-img" text="Under 199/-" />
                <CircleCard imgUrl="/assets/images/grocery.png" className="circle_box--img" alt="product-img" text="Under 199/-" />

                <CircleCard imgUrl="/assets/images/fashion.png" className="circle_box--img" alt="product-img" text="Under 199/-" />
                <CircleCard imgUrl="/assets/images/electronics.png" className="circle_box--img" alt="product-img" text="Under 199/-" />
                <CircleCard imgUrl="/assets/images/appliances.png" className="circle_box--img" alt="product-img" text="Under 199/-" />

            </div>
        </section>
    )
}

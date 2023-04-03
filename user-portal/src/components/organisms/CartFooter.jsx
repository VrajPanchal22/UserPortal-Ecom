import React from 'react'

export default function CartFooter() {
  return (
    <>
    <div class="footer-cart  my-5 container ">
            <div class="footer-group d-flex justify-content-between my-5">
                <div class="footer-cart__logo d-flex align-items-center">
                    <img class="footer-cart__img" src="assets/images/money.png" width="50px" alt=""/>
                    <div class="footer-cart-text ml-3 fs-5 font-weight-bold">Return</div>
                </div>
                <div class="footer-cart__logo footer-body d-flex align-items-center">
                    <img class="footer-cart__img footer-img" src="assets/images/cash-on-delivery.png" width="50px" alt=""/>
                    <div class="footer-cart-text ml-3 fs-5 font-weight-bold">Cash on delivery</div>
                </div>
                <div class="footer-cart__logo footer-body d-flex align-items-center">
                    <img class="footer-cart__img footer-img" src="assets/images/easy-return.png" width="50px" alt=""/>
                    <div class="footer-cart-text ml-3 fs-5 font-weight-bold">Easy Return</div>
                </div>
                <div class="footer-cart__logo footer-body d-flex align-items-center">
                    <img class="footer-cart__img footer-img" src="assets/images/quality-assurance.png" width="50px" alt=""/>
                    <div class="footer-cart-text ml-3 fs-5 font-weight-bold">Quality Assurance</div>
                </div>
            </div>
        </div>
    </>
  )
}

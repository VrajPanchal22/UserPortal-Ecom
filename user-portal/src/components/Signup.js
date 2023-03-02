import React from 'react'
import './Login.css'
import bgImg from '../assets/bac_removed_3.png'
import logoImg from '../assets/logo1.png'
import facebookImg from '../assets/facebook.png'
import googleImg from '../assets/google.png'
import mailImg from '../assets/mail.png'
import { Link } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik'

const initialValues = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    reEnterPassword:'',
    phoneNumber:''
}

function Signup() {
    return (
        <div className="sign-up-container d-flex">
            <div className="sign-up-container__left-img flex-1 d-flex">
                <img className="" src={bgImg} width="100%" alt='backgroud img' />
            </div>
            <div className="sign-up__right-form d-flex flex-1 align-items-center">
                <div className="sign-up__form-container d-flex align-items-center justify-content-center">
                    <Formik
                            initialValues={initialValues}>
                        <Form className="sign-up__form-width">
                            <div className="sign-up__header d-flex justify-content-between align-items-center">
                                <div className="sign-up__sign-up-header">Sign Up</div>
                                <div className="sign-up__better-buy-logo d-flex justify-content-center align-items-center">
                                    <img src={logoImg} alt='logo' />
                                </div>
                            </div>
                            <div className="sign-up__names d-flex justify-content-between">
                                <div className="form-group sign-up__form-elem-fs">
                                    <label htmlFor="First-name">First Name</label>
                                    <div className="sign-up__placeholder-icon">
                                        <i className="fa-solid fa-user sign-up__fa-icon"></i>
                                        <Field type="text" className="form-control sign-up__form-elem-p sign-up__form-elem-br"
                                            id="First-name" name='firstName' placeholder="First Name" />
                                    </div>
                                </div>
                                <div className="form-group sign-up__form-elem-fs ml-1">
                                    <label htmlFor="Last-name">Last Name</label>
                                    <div className="sign-up__placeholder-icon">
                                        <i className="fa-solid fa-user sign-up__fa-icon"></i>
                                        <Field type="text" className="form-control sign-up__form-elem-p sign-up__form-elem-br"
                                            id="Last-name" name='lastName' placeholder="last Name" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group sign-up__form-elem-fs">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <div className="sign-up__placeholder-icon">
                                    <i className="fa-solid fa-envelope sign-up__fa-icon"></i>
                                    <Field type="email" className="form-control sign-up__form-elem-p sign-up__form-elem-br"
                                        id="exampleInputEmail1" name='email' aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                            </div>
                            <div className="form-group sign-up__form-elem-fs">
                                <label htmlFor="password">Password</label>
                                <div className="sign-up__placeholder-icon">
                                    <i className="fa-solid fa-lock sign-up__fa-icon"></i>
                                    <Field type="password" className="form-control sign-up__form-elem-p sign-up__form-elem-br"
                                        id="password" name='password' placeholder="Password" />
                                </div>
                            </div>
                            <div className="form-group sign-up__form-elem-fs">
                                <label htmlFor="Re-Enter">Re-Enter</label>
                                <div className="sign-up__placeholder-icon">
                                    <i className="fa-solid fa-lock fa-repeat sign-up__fa-icon"></i>
                                    <Field type="password" className="form-control sign-up__form-elem-p sign-up__form-elem-br"
                                        id="Re-Enter" name='reEnterPassword' placeholder="Re-Enter Your Password" />
                                </div>
                            </div>
                            <div className="form-group sign-up__form-elem-fs">
                                <label htmlFor="MobileNumber">Mobile-Number</label>
                                <div className="sign-up__placeholder-icon">
                                    <i className="fa-solid fa-lock fa-address-book sign-up__fa-icon"></i>
                                    <Field type="text" className="form-control sign-up__form-elem-p sign-up__form-elem-br"
                                        id="MobileNumber" name='phoneNumber' placeholder="Mobile-Number" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-light w-100 sign-up__btn--btn-clr sign-up__btn--btn-hover">Sign Up</button>

                            <div className="sign-up__badge text-center">
                                <span className="badge badge-secondary sign-up__badge-bg">OR</span>
                            </div>
                            <div className="sign-up__bottom-icons my-2 text-center">
                                <img src={googleImg} alt='google logo' />
                                <img src={facebookImg} alt='facebook logo' />
                                <img src={mailImg} alt='mail logo' />
                            </div>
                            <small id="emailHelp" className="form-text text-muted text-center my-2">Already a user?<Link
                                to="/">LOGIN</Link></small>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default Signup

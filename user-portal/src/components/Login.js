import React from 'react'
import './Login.css'
import bgImg from '../assets/bac_removed_3.png'
import logoImg from '../assets/logo1.png'
import facebookImg from '../assets/facebook.png'
import googleImg from '../assets/google.png'
import mailImg from '../assets/mail.png'
import { Link } from "react-router-dom";




function Login() {
    return (
        <div>
            <div className="sign-up-container d-flex">
                <div className="sign-up-container__left-img flex-1 d-flex">
                    <img className="" src={bgImg} alt='ing' width="100%" />
                </div>
                <div className="sign-up__right-form d-flex flex-1 align-items-center">
                    <div className="sign-up__form-container d-flex align-items-center justify-content-center">
                        <form className="sign-up__form-width">
                            <div className="sign-up__header d-flex justify-content-between align-items-center">
                                <div className="sign-up__sign-up-header">Login</div>
                                <div className="sign-up__better-buy-logo d-flex justify-content-center align-items-center">
                                    <img src={logoImg} alt='signup logo' />
                                </div>
                            </div>
                            <div className="form-group sign-up__form-elem-fs">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <div className="sign-up__placeholder-icon">
                                    <i className="fa-solid fa-envelope sign-up__fa-icon"></i>
                                    <input type="email" className="form-control sign-up__form-elem-p sign-up__form-elem-br"
                                        id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </div>
                            </div>
                            <div className="form-group sign-up__form-elem-fs">
                                <label htmlFor="password">Password</label>
                                <div className="sign-up__placeholder-icon">
                                    <i className="fa-solid fa-lock sign-up__fa-icon"></i>
                                    <input type="password" className="form-control sign-up__form-elem-p sign-up__form-elem-br"
                                        id="password" placeholder="Password" />
                                </div>
                            </div>
                            <button type="submit" className="btn btn-light w-100 btn--btn-clr btn--btn-hover">Login</button>

                            <div className="sign-up__badge text-center">
                                <span className="badge badge-secondary sign-up__badge-bg">OR</span>
                            </div>
                            <div className="sign-up__bottom-icons my-2 text-center">
                                <img src={googleImg} alt='google logo' />
                                <img src={facebookImg} alt='facebook logo'/>
                                <img src={mailImg} alt='mail logo'/>
                            </div>
                            <small id="emailHelp" className="form-text text-muted text-center my-2">Need An Account?<Link
                                to="/signUp">Sign Up</Link></small>                              
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login

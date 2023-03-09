import React from 'react'
import FormInput from '../molecules/FormInput'
import Button from '../atoms/Button'
import ImgTag from '../atoms/ImgTag'
import { Formik, Form } from 'formik'
import SocialIcon from '../molecules/SocialIcon'
import { Link } from 'react-router-dom'
import * as yup from 'yup';

const initialValues = {
    email: '',
    password: ''
}

const validationSchema = yup.object({
    email:yup.string().email('enter valid email').required('required !'),
    password: yup.string().required('required !')
    })

function Login() {

    function handlesubmit(values) {
        let data = values
        console.log(data)
        fetch("http://localhost:3200/api/user", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then((result) => {
                if (result.message) {
                    console.log(result.message)
                }
            }).catch((error) => {
                console.log("errorincatch:::::", error)
            })
    }


    return (
        <div className="main-container d-flex">
            <div className="flex-1 d-flex">
                <ImgTag className="w-100" imgUrl="/assets/images/bac_removed_3.png" altText='backgroud img' />
                <img src="" alt="" />
            </div>
            <div className="d-flex flex-1 align-items-center">
                <div className="user-form d-flex align-items-center justify-content-center">
                    <Formik
                        initialValues={initialValues} validationSchema={validationSchema} onSubmit={handlesubmit}>
                        <Form className="form-width">
                            <div className=" d-flex justify-content-between align-items-center">
                                <div className="signup-logo">Login</div>
                                <div className="website-logo d-flex justify-content-center align-items-center">
                                    <ImgTag className="w-100" imgUrl='/assets/images/logo1.png' altText='backgroud img' />
                                </div>
                            </div>
                            <FormInput outerDivClass='form-fontsize mt-2' htmlFor='email' label='Email ' fieldClass='form-field' iconClass='fa-solid fa-envelope form-icon' type='email' inputClass='form-control form-para form-br' id='email' name='email' placeholder="   Enter email" />
                            <FormInput outerDivClass='form-fontsize mt-2' htmlFor='password' label='password ' fieldClass='form-field' iconClass='fa-solid fa-lock form-icon' type='password' inputClass='form-control form-para form-br' id='password' name='password' placeholder="   password" />
                            <Button type='submit' className='btn w-100 signup-btn' buttonText='Login' />
                            <div className="sign-up__badge text-center">
                                <span className="badge badge-secondary badge-bg">OR</span>
                            </div>
                            <SocialIcon divClass='social-icons my-2  text-center' imgClass='w-100' urlArr={['google.png','facebook.png','mail.png']} />
                            <small id="emailHelp" className="form-text text-muted text-center my-2">Need An Account?<Link to='/signup'>Sign Up</Link></small>
                        </Form>
                    </Formik>
                </div>
            </div>
            <div>
            </div>
        </div>
    )
}

export default Login

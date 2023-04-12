import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../molecules/FormInput";
import Button from "../atoms/Button";
import ImgTag from "../atoms/ImgTag";
import { Formik, Form } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { API_BASE_URL } from "../../config";

const initialValues = {
  emailId: "",
  password: "",
};

const validationSchema = yup.object({
  emailId: yup.string().email("enter valid email").required("required !"),
  password: yup.string().required("required !"),
});

function Login() {
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  function handlesubmit(values) {
    let data = values;
    axios
      .post(`${API_BASE_URL}user/login`, data)
      .then((result) => {
        console.log(result);
        if (result.data.status) {
          setMsg(result.data.message);
          console.log("inside first if");
          localStorage.setItem("token", result.data.token);
          const tempId = localStorage.getItem("tempUserId");
          if (tempId) {
            localStorage.setItem(
              "userData",
              JSON.stringify({
                _id: tempId,
                firstName: result.data.userData.firstName,
                lastName: result.data.userData.lastName,
                password: null,
                role: result.data.userData.role,
                _v: result.data.userData._v,
              })
            );
            localStorage.removeItem("tempUserId");
          } else {
            localStorage.setItem(
              "userData",
              JSON.stringify(result.data.userData)
            );
          }
          localStorage.setItem(
            "userData",
            JSON.stringify(result.data.userData)
          );
          const path = localStorage.getItem("path");
          localStorage.removeItem("path");
          if (path) {
            navigate(path);
          } else {
            console.log("inside else");
            navigate("/");
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          setMsg(error.response.data.message);
        }
      });
  }

  // function OnLogin() {
  //   const path = localStorage.getItem('path');

  //   if (path) {
  //     navigate(path);
  //   }else{
  //     navigate('/home')
  //   }
  // }

  return (
    <div className="main-container d-flex">
      <div className="flex-1 d-flex">
        <ImgTag
          className="w-100"
          imgUrl="/assets/images/bac_removed_3.png"
          alt="backgroud img"
        />
      </div>
      <div className="d-flex flex-1 align-items-center">
        <div className="user-form d-flex align-items-center justify-content-center">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handlesubmit}
          >
            <Form className="form-width">
              <div className=" d-flex justify-content-between align-items-center">
                <div className="signup-logo">Login</div>
                <div className="website-logo d-flex justify-content-center align-items-center">
                  <ImgTag
                    className="w-100"
                    imgUrl="/assets/images/logo1.png"
                    altText="backgroud img"
                  />
                </div>
              </div>
              <div className="msg position-absolute w-100">
                {msg && msg !== "login successfull!" ? (
                  <p className="text-danger">Invalid emailId or password</p>
                ) : null}
              </div>
              <br />
              <FormInput
                outerDivClass="form-fontsize mt-2"
                htmlFor="email"
                label="Email"
                fieldClass="form-field"
                iconClass="fa-solid fa-envelope form-icon"
                type="email"
                inputClass="form-control form-para form-br"
                id="email"
                name="emailId"
                placeholder="   Enter email"
              />
              <FormInput
                outerDivClass="form-fontsize mt-2"
                htmlFor="password"
                label="password "
                fieldClass="form-field"
                iconClass="fa-solid fa-lock form-icon"
                type="password"
                inputClass="form-control form-para form-br"
                id="password"
                name="password"
                placeholder="   password"
              />
              <Button
                type="submit"
                className="btn w-100 signup-btn"
                buttonText="Login"
              />

              <small
                id="emailHelp"
                className="form-text text-muted text-center my-2"
              >
                Need An Account?<Link to="/signup">Sign Up</Link>
              </small>
            </Form>
          </Formik>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Login;

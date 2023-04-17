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
import { useContext } from "react";
import cartContext from "../../contexts/cartContext";

const initialValues = {
  emailId: "",
  password: "",
};

const validationSchema = yup.object({
  emailId: yup.string().email("enter valid email").required("required !"),
  password: yup.string().required("required !"),
});

function Login() {
  const { cartData, fetchData, productsInCart } = useContext(cartContext);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  async function handlesubmit(values) {
    let data = values;
    await axios
      .post(`${API_BASE_URL}user/login`, data)
      .then(async (result) => {
        console.log(result);
        if (result.data.status) {
          setMsg(result.data.message);
          // console.log("Token", result.data.token);
          const tempId = sessionStorage.getItem("tempUserId");
          console.log("result:", result);

          if (
            result.data.status === true &&
            result.data.userData.cartProductsInTempId != null
          ) {
            sessionStorage.removeItem("tempUserId");
          }
          console.log("temp: ", tempId);
          if (tempId) {
            console.log("inside if tempId");
            localStorage.setItem("token", result.data.token);
            console.log("RESULT: ", result);
            if (result.data.userData.cartProductsInTempId == null) {
              localStorage.setItem(
                "userData",
                JSON.stringify({
                  _id: result.data.userData._id,
                  firstName: result.data.userData.firstName,
                  lastName: result.data.userData.lastName,
                  password: null,
                  role: result.data.userData.role,
                  _v: result.data.userData._v,
                  cartProductsInTempId:null,
                })
              );
              sessionStorage.removeItem("tempUserId")
              fetchData()
            } else {
              localStorage.setItem(
                "userData",
                JSON.stringify({
                  _id: result.data.userData._id,
                  firstName: result.data.userData.firstName,
                  lastName: result.data.userData.lastName,
                  password: null,
                  role: result.data.userData.role,  
                  _v: result.data.userData._v,
                  cartProductsInTempId:tempId
                    
                  // cartProductsInTempId:
                  //   result.data.userData.cartProductsInTempId == null
                  //     ? tempId
                  //     : null
                })
              );
              fetchData()
            }
            const userData = JSON.parse(localStorage.getItem("userData"));
            fetchData()
            try {
              const response = await axios.get(
                `${API_BASE_URL}cart/handleBuyNow/${userData._id}/${userData.cartProductsInTempId}`,
                data
              );
              console.log("data: ", response.data.data.existingUser);
              localStorage.setItem(
                "existingUser",
                JSON.stringify(response.data.data)
              );
            } catch (error) {
              console.log(error);
            }
            // console.log("exisitingUser:",existingUser)
            const exisitingUserData = JSON.parse(
              localStorage.getItem("existingUser")
            );
            console.log("exisitingUserData: ", exisitingUserData);
            if (exisitingUserData) {
              console.log("exisitingUserData");
              localStorage.setItem(
                "userData",
                JSON.stringify({
                  _id: result.data.userData._id,
                  firstName: result.data.userData.firstName,
                  lastName: result.data.userData.lastName,
                  password: null,
                  role: result.data.userData.role,
                  _v: result.data.userData._v,
                  cartProductsInTempId:
                    exisitingUserData.exisitingUserData.cartProductsInTempId,
                })
              );
              fetchData()
            }
            console.log("data storing in db");
            try {
              await axios
                .patch(
                  `${API_BASE_URL}user/updateId/${userData._id}`,
                  exisitingUserData
                    ? {
                        cartProductsInTempId:
                          exisitingUserData.exisitingUserData
                            .cartProductsInTempId,
                      }
                    : { cartProductsInTempId: userData.cartProductsInTempId }
                )
                .then((data) => console.log(data));
            } catch (error) {
              console.log(error);
            }
            // localStorage.removeItem("existingUser")
            // sessionStorage.removeItem("tempUserId");
          } else {
            console.log("inside else !tempId");
            console.log("RESULT: ", result);
            localStorage.setItem("token", result.data.token);

            localStorage.setItem(
              "userData",
              JSON.stringify({
                _id: result.data.userData._id,
                firstName: result.data.userData.firstName,
                lastName: result.data.userData.lastName,
                password: null,
                role: result.data.userData.role,
                _v: result.data.userData._v,
                cartProductsInTempId: result.data.userData.cartProductsInTempId,
              })
            );
            fetchData()
          }

          const path = localStorage.getItem("path");
          if (path) {
            navigate(path);
            localStorage.removeItem("path");
          } else {
            navigate("/productGallery");
          }
        }
      })
      .catch((error) => {
        if (error.response) {
          setMsg(error.response.data.message);
        }
      });
      fetchData()
  }
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

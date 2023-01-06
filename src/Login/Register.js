import React from "react";
import { Field, Form, Formik } from "formik";
// import * as Yup from "Yup";
import { useState } from "react";

import * as Yup from "yup";
import"./register.css";


function Register() {

    const [initialFormValues] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        password: "",
        confirmPassword: "",
        Address: "",
        District: "",
        City: "",
        PinCode: "",
        State: "",


    })

    const signupschema = Yup.object().shape({
         
        firstName: Yup.string().required("First Name is Required").min(3, "Name must have Three Charecters.").max(20, "Name Can not have more than 20 Charecters"),
        lastName: Yup.string().required("First Name is Required").min(3, "Name must have Three Charecters.").max(20, "Name Can not have more than 20 Charecters"),
        phone: Yup.string().required("Phone Number is Require").min(10, "Phone Must Have 10 Digits.").max(12, "Phone Must have 10 Digits."),
        email: Yup.string("Email type invalid").required("Email can not be empty").email("Invalid Email Address."),
        password: Yup.string().required('Please Enter your password').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
        confirmPassword: Yup.string().oneOf([Yup.ref("password"),null],"Password Must Match."),
        Address: Yup.string().required("Address is required").min(5, "Address can not be less than 5 Charecters").max(30, "Address can not exceeds 30 charecters"),
        District: Yup.string().required("District is Required").max(20, "District can not contain more than 20 charecters."),
        City: Yup.string().required("City is Required"),
        PinCode: Yup.string()
        .required()
        .matches(/^[0-9]+$/, "Must be only digits")
        .min(6, 'Must be exactly 5 digits')
        .max(6, 'Must be exactly 5 digits'),
        State: Yup.string("Enter a valid State.").required("State is require"),
           
           
        }
    )
    function crossed() {

        let rw = document.querySelector(".row");

        rw.style.opacity = "1";
        let regdiv = document.querySelector(".register-div");
    
        regdiv.style.display = "none";
        
    }

 
   function submitted(){
    alert("Registered Successfull!!");
    let regdiv = document.querySelector(".register-div");
    
        regdiv.style.display = "none";
        let rw = document.querySelector(".row");

        rw.style.opacity = "1";
        document.getElementsByTagName("Field").value="";
    
        let rrg=document.querySelector(".registersec");
        rrg.style.display="none";
   }


    return (
        <div className="register-div-main" >
            <span className="cross" onClick={crossed}>&times;</span>
            <div id="register-div-main">
            <Formik initialValues={initialFormValues} validationSchema={signupschema} onSubmit={submitted}>
                {({ errors, touched }) => (
                    <Form className="form-sec">
                        <label>
                            First Name
                            <Field name="firstName" id="fname"></Field>
                        </label>
                        {errors.firstName && touched.firstName ? (<div className='errors'>{errors.firstName}</div>) : null}
                        <label>
                            Last Name
                            <Field name="lastName" id="lname"></Field>
                        </label>
                        {errors.lastName && touched.lastName ? (<div className='errors'>{errors.lastName}</div>) : null}
                        <label>
                            Contact Number
                            <Field type="number" name="phone" id="phone"></Field>
                        </label>
                        {errors.phone && touched.phone ? (<div className='errors'>{errors.phone}</div>) : null}
                        <label>
                            E-Mail
                            <Field name="email" type="email" id="mail"></Field>
                        </label>
                        {errors.email && touched.email ? (<div className="errors">{errors.email}</div>) : null}
                        <label>
                            Password
                            <Field name="password" type="password"></Field>
                        </label>
                        {errors.password && touched.password ? (<div className="errors">{errors.password}</div>) : null}


                        <label>
                            Confirm-Password
                            <Field name="confirmPassword" type="password"></Field>
                        </label>
                        {errors.confirmPassword && touched.confirmPassword ? (<div className="errors">{errors.confirmPassword}</div>) : null}

                        <label>
                            Address
                            <Field name="Address" id="add"></Field>
                        </label>
                        {errors.Address && touched.Address ? (<div className="errors">{errors.Address}</div>) : null}

                        <label>
                            District
                            <Field name="District" id="dist"></Field>
                        </label>
                        {errors.District && touched.District ? (<div className="errors">{errors.District}</div>) : null}
                        <label>
                            City
                            <Field name="City" id="city"></Field>
                        </label>
                        {errors.City && touched.City ? (<div className="errors">{errors.City}</div>) : null}
                        <label>
                            Pincode
                            <Field name="PinCode" id="pin"></Field>
                        </label>
                        {errors.PinCode && touched.PinCode ? (<div className="errors">{errors.PinCode}</div>) : null}
                        <label>
                            State
                            <Field name="State" id="stt"></Field>
                        </label>
                        {errors.State && touched.State ? (<div className="errors">{errors.State}</div>) : null}

                        <button type="submit" className="reg-sub-btn">Submit</button>

                    </Form>
                )}





            </Formik>
            </div>
        </div>
    )
}

export default Register;
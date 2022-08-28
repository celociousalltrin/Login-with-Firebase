import React from 'react';
import {useFormik} from "formik";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase";
import * as yup from "yup";
import "./Login.css";

const LoginPage = () => {
    const formik = useFormik({
        initialValues:{
            email:"",
            password:"",
            displayName:"",
            phoneNumber:"",
        },
      validationSchema:yup.object({
        email:yup.string()
        .email(15,"Invalid email addresss")
        .required("Required"),
        password:yup.string()
        .min(6,"Must be greater than 6 characters")
        .required("Required"),
        displayName:yup.string()
        .max(15,"maximum 15 characters is allowed")
        .required("Required"),
        phoneNumber:yup.number()
        .required("Required")
      })
    })
    const register = ((e)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(auth,formik.values.email,formik.values.password,formik.values.displayName,formik.values.phoneNumber)
        .then((authUser)=>{
            console.log(authUser)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
  return (
    <div className='Log'>
        <form>
        <input id="displayName" name="displayName" type="text"
            placeholder='displayName...' 
            value={formik.values.displayName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.displayName && formik.errors.displayName ? <p>{formik.errors.displayName}</p>:null}

            <input id="phoneNumber" name="phoneNumber" type="number"
            placeholder='phoneNumber...' 
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? <p>{formik.errors.phoneNumber}</p>:null}

            <input id="email" name="email" type="email"
            placeholder='email...' 
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p>:null}

            <input id ="password" name="password" type="password"
            placeholder ="pasword..." 
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}/>
            {formik.touched.password && formik.errors.password ? <p>{formik.errors.password}</p>:null}

            <button type="Submit"
            onClick={register}>Login</button>
        </form>
    </div>
  )
}

export default LoginPage;
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import * as Yup from 'yup'
export default function Register() {

let validate = Yup.object({
  name: Yup.string().required('name is required').min(3,'minimun 3 char').max(15,'maximum 15 char'),
  email:Yup.string().required("email is required").email('Email invalid'),
  password:Yup.string().required().matches(/^[A-Z][a-zA-Z0-9!@#$^&%*()_-]{3,16}$/,"Enter Valid Password"),
  rePassword: Yup.string().required().oneOf([Yup.ref("password")],"Password didn't match"),
  phone:Yup.string().required().matches(/^(010|011|015|012)[0-9]{8}$/,"Enter Vallid Phone")


})




let navigate = useNavigate()
let formik =useFormik({
  initialValues:{
    name:"",
    email:"",
    password:"",
    rePassword:"",
    phone:""
  },
  onSubmit:(values)=>  {sendRegisterData(values)},
  validationSchema:validate
  
})
let [loading ,setLoading]=useState(false)
let [errorMsg ,setErrorMsg]=useState("")
 async function sendRegisterData(values){
setLoading(true)
  let {data}= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values).catch((error)=>{
    console.log(error)
  setErrorMsg(error.response.data.message)
  setLoading(false)
})
setLoading(false)
   
if(data.message === 'success'){
console.log(data.message)

navigate('/login')
}

}


  return <>
  
  <div className="w-75 mx-auto">
<h3>Register Now</h3>
<form className='my-4' onSubmit={formik.handleSubmit}>
<label htmlFor="name">Name:</label>
<input type="text" id='name' className='form-control my-2' name='name' placeholder='Enter your name...' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.name}/>



{formik.errors.name && formik.touched.name ?  <p className='my-2 error-text'>* {formik.errors.name} </p> :"" }



<label htmlFor="email">Email:</label>
<input type="email" className='form-control my-2' name="email" id="email" placeholder='Enter your email...'onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />


{formik.errors.email && formik.touched.email ?  <p className='my-2 error-text'>* {formik.errors.email} </p> :"" }


<label htmlFor="phone">Phone:</label>
<input type="tel" className='form-control my-2' name="phone" id="phone" placeholder='Enter your phone...' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.phone} />
{formik.errors.phone && formik.touched.phone ?  <p className='my-2 error-text'>* {formik.errors.phone} </p> :"" }



<label htmlFor="password">Password:</label>
<input type="password" className='form-control my-2' name="password" id="password" placeholder='Enter your password...' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
{formik.errors.password && formik.touched.password ?  <p className='my-2 error-text'>* {formik.errors.password} </p> :"" }


<label htmlFor="rePassword">rePassword:</label>
<input type="password" className='form-control my-2' name="rePassword" id="rePassword" placeholder='Enter your password agian...' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.rePassword} />
{formik.errors.rePassword && formik.touched.rePassword ?  <p className='my-2 error-text'>* {formik.errors.rePassword} </p> :"" }



{errorMsg? <div className='alert alert-danger my-2'>
{errorMsg}
</div> :""}



{loading?  <button type='button' className='btn btn-info my-2'>
          <i className='fa-solid fa-spinner fa-spin text-white'></i>
        </button>:  <button  className='btn btn-info my-2' type='submit'>Register</button>}
       

</form>


  </div>






  
  
  
  </>
}

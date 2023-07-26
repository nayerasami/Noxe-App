import React, { useContext, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios'
import {useNavigate ,Link} from 'react-router-dom'
import * as Yup from 'yup'
import { LoginContext } from '../../Context/LoginContext'


export default function Login({}) {


   let {saveUserData}=useContext(LoginContext)
  let [errorMsg,setErrorMsg]=useState("")
  let [loading ,setLoading]=useState(false)

  let navigate =useNavigate()

  let validate =Yup.object({
    email : Yup.string().required("email is required").email("Email invalid"),

    password: Yup.string().required().matches(/^[A-Z][a-zA-Z0-9!@#$^&%*()_-]{3,16}$/,"Enter Valid Password")
  })



  let formik =useFormik({
initialValues:{
  email:"",
  password:""
},onSubmit:(values)=>
  sendUserData(values),
  validationSchema:validate
  })

async function sendUserData(objData){
  setLoading(true)
  let {data}= await axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',objData).catch((error)=>{
  
  console.log(error.response.data.message)
  setErrorMsg(error.response.data.message)
  setLoading(false)
} )

setLoading(false)
console.log(data)
//  })
  setLoading(false)
  if(data.message === 'success'){

localStorage.setItem('userToken',data.token)
saveUserData()
console.log("hi")
navigate('/home')
  }

}


  return <>
   <div className="w-75 mx-auto">
<h3>Login</h3>
<form className='my-4' onSubmit={formik.handleSubmit}>
<label htmlFor="email">Email:</label>
<input type="email" name="email" id="email" className='form-control my-2'  placeholder='Enter your Email...' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.email} />

{formik.errors.email && formik.touched.email ?<p className='my-2 error-text'>{formik.errors.email}</p> :"" }


<label htmlFor="password">Password:</label>
<input type="password" className='form-control my-2' name="password" id="password" placeholder='Enter your password...' onBlur={formik.handleBlur} onChange={formik.handleChange} value={formik.values.password} />
{formik.errors.password && formik.touched.password ?  <p className='my-2 error-text'>* {formik.errors.password} </p> :"" }



<Link to='/forgetPassword?'>Forget Password ?</Link>
<br />
{errorMsg? <div className='alert alert-danger my-2'>
{errorMsg}
</div> :""}


{loading?  <button type='button' className='btn btn-info my-2'>
          <i className='fa-solid fa-spinner fa-spin text-white'></i>
        </button>:  <button  className='btn btn-info my-2' type='submit'>Login</button>}
       


</form>




    </div>
  
  
  
  </>
}

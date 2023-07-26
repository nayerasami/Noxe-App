import { NavLink,Link ,useNavigate,Navigate} from 'react-router-dom'

import React, { useContext } from 'react'
import { LoginContext } from '../../Context/LoginContext'

export default function Navbar() {

  let {userData,setUserData}=useContext(LoginContext)
  function logOut(){
    localStorage.removeItem('userToken')
    setUserData(null)
   
return <Navigate to='/login'/>
        }





  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-dark bg-transparent '>
      <div className='container-fluid'>
        <NavLink className='navbar-brand text-light' to='/'>
 <h3> Noxe</h3>
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
        <button className='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
      {userData?    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <NavLink  className={ ({isActive})=> isActive === true? 'active nav-link':'nav-link'} to="home" >Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink className={ ({isActive})=> isActive === true?'active nav-link':'nav-link'} to='movies'>Movies</NavLink>
            </li>
        
            <li className='nav-item'>
              <NavLink className={ ({isActive})=> isActive === true?'active nav-link':'nav-link'} to='tvshows'>TvShows</NavLink>
            </li>
            <li className='nav-item'>
            <NavLink className={ ({isActive})=> isActive === true? 'active nav-link':'nav-link'} to="people" >People</NavLink>
            </li>
         
         </ul> :"" }
      
      
    
       
         <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>



         <li className='nav-item text-light py-2'>
        <i className='fa-brands fa-facebook mx-2'></i>
        <i className='fa-brands fa-youtube mx-2'></i>
        <i className='fa-brands fa-twitter mx-2'></i>
        <i className='fa-brands fa-spotify mx-2'></i>
      </li>


{userData?    <li className='nav-item'>
            <NavLink onClick={logOut}  className={ ({isActive})=> isActive === true? 'active nav-link':'nav-link'} to="login" >Logout</NavLink>
            </li> : <>
            <li className='nav-item'>
            <NavLink className={ ({isActive})=> isActive === true? 'active nav-link':'nav-link'} to="register" >Register</NavLink>
            </li>


            <li className='nav-item'>
            <NavLink className={ ({isActive})=> isActive === true? 'active nav-link':'nav-link'} to="login" >Login</NavLink>
            </li></>}

   


         
         
         
         
          </ul>
        
        </div>
      </div>
    </nav>
    
    </>
  )
}

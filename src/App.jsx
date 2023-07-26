import React, { useContext, useEffect, useState } from 'react'
import { createBrowserRouter ,Navigate,RouterProvider} from 'react-router-dom'
import Layout from './Components/Layout/Layout'


import TvShows from './Components/TvShows/TvShows'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import NotFound from './Components/NotFound/NotFound'
import People from './Components/People/People'
import Forgetpassword from './Components/Forgetpassword/Forgetpassword'

import { LoginContextProvider } from './Context/LoginContext'
import ProtectedRoutin from './Components/ProtectedRouting/ProtectedRouting'
import Home from './Components/Home/Home'
import MovieDetails from './Components/MovieDetails/MovieDetails'
import TvShowDetails from './Components/TvShowDetails/TvShowDetails'
import PeopleDetails from './Components/PeopleDetails/PeopleDetails'
import Movies from './Components/Movies/Movies'


export default function App() {


  function ProtectRouting2(props){

    if(localStorage.getItem('userToken')!==null){
return <Navigate to={'/home'}/>
    }else{
      
   return   props.children
    }
  }



  let routes =createBrowserRouter([
    {path:"Noxe-App/",element:<Layout/>,children:[
      {path:"home",element:<ProtectedRoutin><Home/></ProtectedRoutin> },
      {path:"movies",element:<ProtectedRoutin><Movies/></ProtectedRoutin>},
      {path:"tvshows",element:<ProtectedRoutin><TvShows/></ProtectedRoutin>},
      {path:"tvshowdetails/:id/:mediaType",element:<ProtectedRoutin><TvShowDetails/></ProtectedRoutin>},
      {path:"peopledetails/:id/:mediaType",element:<ProtectedRoutin><PeopleDetails/></ProtectedRoutin>},
      {path:"login",element:<Login/>},
      {index: true ,element:<ProtectRouting2><Register/></ProtectRouting2>},
      {path:"moviedetails/:id/:mediaType" ,element:<ProtectedRoutin><MovieDetails/></ProtectedRoutin>},
      {path:"forgetpassword",element:<Forgetpassword/>},
      {path:"*",element:<NotFound/>},
     {path:"people",element:<ProtectedRoutin><People/></ProtectedRoutin>}
    
    ]}
  ])
  return (

 
    
    <LoginContextProvider>

<RouterProvider router={routes}/>
    </LoginContextProvider>



   
  )

}

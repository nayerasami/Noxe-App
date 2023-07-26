import { useState ,createContext, useEffect } from "react";
import {Navigate} from 'react-router-dom'
import jwtDecode from 'jwt-decode'



export let LoginContext =createContext()


export function LoginContextProvider(props){


    let [userData,setUserData]=useState(null)

    function saveUserData(){
      let encodedToken =localStorage.getItem('userToken');
      let decodedToken =jwtDecode(encodedToken)
      setUserData(decodedToken)
    console.log(userData)
    console.log("nono")
    
    }
 
    useEffect(()=>{

        if(localStorage.getItem('userToken')!== null){
      
        saveUserData()
        }
      },[])
   

    return <LoginContext.Provider  value={{saveUserData,userData,setUserData}}>

        {props.children}
   </LoginContext.Provider>
    
   
}
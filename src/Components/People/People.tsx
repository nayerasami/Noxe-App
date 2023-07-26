import React, { useEffect, useState } from 'react'
import { Movie } from '../Interface/movies'

import axios from 'axios'
import { Link } from 'react-router-dom'
import {  Person } from '../Interface/people'

export default function People() {
 
let [peopleList,setPeopleList]=useState<Person[]>([])
let nums =new Array(10).fill(1).map((el,index)=>{return index+1})
console.log(nums)
async function getPeople(page:number){
let {data} =await axios.get(`https://api.themoviedb.org/3/person/popular?api_key=0a14be062befa8e804382b4e2e41f3bb&language=en-US&page=${page}`)
console.log(data.results)
setPeopleList(data.results)

}
useEffect(()=>{
  getPeople(1)

},[])
  return (

    <div className='container'>

<div className="row gy-2 my-4">
{peopleList.map((human,index)=>{return <div className="col-md-2" key={index}>


<Link className='text-decoration-none text-light' to={`/moviedetails/${human.id}/person`}><div className='position-relative'>
<img src={'https://image.tmdb.org/t/p/w500'+human.profile_path} alt='' className='w-100'/>
<h3 className='h6 text-center mt-2'>{human.name}</h3>

</div></Link>


</div>
})}







</div>

<nav className='py-5'>
  <ul className='pagination pagination-sm d-flex justify-content-center'>
   {nums.map((page)=>{return <li key={page} onClick={()=>{getPeople(page)}} className='page-item p-1'>
   <span  className='page-link bg-transparent text-white'>{page}</span>



    </li>})}
  </ul>
</nav>




    </div>
  )
}

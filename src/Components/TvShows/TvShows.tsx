
import React, { useEffect, useState } from 'react'
import { Movie } from '../Interface/movies'

import axios from 'axios'
import { Link } from 'react-router-dom'
import { Tv } from '../Interface/tv'

export default function TvShows() {
 
let [tvShowsList,setTvShowsList]=useState<Tv[]>([])
let nums =new Array(10).fill(1).map((el,index)=>{return index+1})
console.log(nums)
async function getTvShow(page:number){
let {data} =await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=0a14be062befa8e804382b4e2e41f3bb&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=true&page=${page}`)
console.log(data.results)
setTvShowsList(data.results)

}
useEffect(()=>{
  getTvShow(1)

},[])
  return (

    <div className='container'>

<div className="row gy-2 my-4">
{tvShowsList.map((show,index)=>{return <div className="col-md-2" key={index}>


<Link className='text-decoration-none text-light' to={`/moviedetails/${show.id}/tv`}><div className='position-relative'>
<img src={'https://image.tmdb.org/t/p/w500'+show.poster_path} alt='' className='w-100'/>
<h3 className='h6 text-center mt-2'>{show.name}</h3>

</div></Link>


</div>
})}







</div>

<nav className='py-5'>
  <ul className='pagination pagination-sm d-flex justify-content-center'>
   {nums.map((page)=>{return <li key={page} onClick={()=>{getTvShow(page)}} className='page-item p-1'>
   <span  className='page-link bg-transparent text-white'>{page}</span>



    </li>})}
  </ul>
</nav>




    </div>
  )
}

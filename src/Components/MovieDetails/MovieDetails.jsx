import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function MovieDetails() {
 let {id,mediaType}=useParams()
    let [details ,setDetails]=useState({})
async function getDetails(id,mediaType){


    let {data}=await axios.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=0a14be062befa8e804382b4e2e41f3bb&language=en-US`)
console.log(data)
setDetails(data)
}

useEffect(()=>{

    getDetails(id,mediaType)
},[])

    return<>
    <div className='container'>

     <div className="row my-4">
<div className="col-md-3 ">
<div className='position-relative '>
<img src={'https://image.tmdb.org/t/p/w500'+ details.poster_path} alt='' className='w-100'/>

</div>
</div>
<div className="col-md-6 d-flex align-items-center">
<div>
<h2> {details.title} {details.name}</h2>
<p className='paragh my-3'>{details.overview}</p>
<h4 className='h6'> <span className='paragh1'>Vote Average: </span>{details.vote_average}</h4>
<h4 className='h6'> <span className='paragh1'>Vote Count: </span>{details.vote_count}</h4>
</div>
</div>




     </div>
    </div>
    </>

}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import $ from 'jquery';
import { Link } from 'react-router-dom';
export default function Home() {

let [moviesList,setMoviesList]=useState([])
let [tvShowsList,setTvShowsList]=useState([])
let [peopleList,setPeopleList]=useState([])


 async function getTrending(mediaItem,callback){

  let {data} = await axios.get(`https://api.themoviedb.org/3/trending/${mediaItem}/week?api_key=0a14be062befa8e804382b4e2e41f3bb`)

callback(data.results)
$(".loading").fadeOut(3000)
  }

    
  useEffect(()=>{

    getTrending('movie',setMoviesList)
    getTrending('tv',setTvShowsList)
    getTrending('person',setPeopleList)
 


  },[])


  return (
  <>

    <div className='container'>
    <div className=' loading position-fixed top-0 start-0 end-0 bottom-0   '>
<i className='fa-solid fa-spinner fa-spin fa-2xl'></i>
</div>
      <div className="row py-3">
      <div className="col-md-4 d-flex align-items-center">
<div >
<div className='brdr w-25 mb-3'></div>
        <h2 className='h3'>Trending <br /> Movies <br /> To Watch Now 
        </h2>
        <p className='paragh'> Most Watched Movies By Week </p>
        <div className='brdr w-100 mt-3'></div>
</div>
      </div>
     
     

      
      {moviesList?.slice(0,10).map((item,index)=>{


return<div className='col-md-2 gy-2' key={index}>
<Link className='text-decoration-none text-light' to={`/moviedetails/${item.id}/${item.media_type}`}><div className='position-relative'>
<img src={'https://image.tmdb.org/t/p/w500'+ item.poster_path} alt='' className='w-100'/>
<h3 className='h6 text-center mt-2'>{item.title}</h3>
<div className="vote position-absolute top-0 end-0 p-1"> {item.vote_average.toFixed(1)} </div>
</div></Link>

  </div>


     }
     
     )}
      
      
      </div>
    
    
    
      <div className="row py-5">
      <div className="col-md-4  d-flex align-items-center">
<div >
<div className='brdr w-25 mb-3'></div>
        <h2 className='h3'>Trending <br /> tv Shows <br /> To Watch Now 
        </h2>
        <p className='paragh'> Most Watched tvShows By Week </p>
        <div className='brdr w-100 mt-3'></div>
</div>
      </div>
    
      {tvShowsList?.slice(0,10).map((item,index)=>{


return<div className='col-md-2 gy-2' key={index}>
<Link className='text-decoration-none text-light' to={`/tvshowdetails/${item.id}/${item.media_type}`}>
<div className='position-relative'>
<img src={'https://image.tmdb.org/t/p/w500'+ item.poster_path} alt='' className='w-100'/>
<h3 className='h6 text-center mt-2'>{item.name}</h3>
<div className="vote position-absolute top-0 end-0 p-1"> {item.vote_average.toFixed(1)} </div>
</div>

</Link>

  </div>


     }
     
     
     )}
      
      
      </div>
      <div className="row py-5">
      <div className="col-md-4  d-flex align-items-center">
<div >
<div className='brdr w-25 mb-3'></div>
        <h2 className='h3'>Trending <br /> People <br /> To Watch Now 
        </h2>
        <p className='paragh'> Most Popular People By Week </p>
        <div className='brdr w-100 mt-3'></div>
</div>
      </div>
    
      {peopleList?.slice(0,10).map((item,index)=>{


return<div className='col-md-2 gy-2' key={index}>
<Link className='text-decoration-none text-light' to={`/peopledetails/${item.id}/${item.media_type}`}>
<div className='position-relative'>
<img src={'https://image.tmdb.org/t/p/w500'+item.profile_path} alt='' className='w-100'/>
<h3 className='h6 text-center'>{item.name}</h3>


</div>
</Link>

  </div>


     }
     
     
     )}
      
      
      </div>
    </div>
  </>
  
  )
}

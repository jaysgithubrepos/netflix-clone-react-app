import React,{useEffect, useState} from 'react';
import axios from "./axios.js";
import './Row.css';

const baseURL="https://image.tmdb.org/t/p/original";

function Row({title,fetchUrl,islargeRow}) {
    const [movies, setMovies ]= useState([]); 

//A snippet of code which runs on a specific conditions/variables

useEffect(()=>{
// if[],run once  when the row loads,and do not run again

async function fetchData(){
    const request =await axios.get(fetchUrl);
    setMovies(request.data.results); 
    return request;

}
fetchData();


},[fetchUrl]);





  return (
    

    <div className='row'>
        <h2 className='row-titles'>{title}</h2>
        <div className="row__posters">
            {movies.map(movie =>(
            <img key={movie.id} className={`row_poster ${islargeRow && "row_largeposter"}`} src={`${baseURL}${islargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
            ))}


        </div>


    </div>


  )
}

export default Row
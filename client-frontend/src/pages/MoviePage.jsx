import React from 'react'
import { useEffect } from "react";
import { useParams} from "react-router";
import { useState } from 'react';
import { Play } from 'lucide-react'

const MoviePage = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);
    const [recommendations, setRecommendations] = useState([]);




    const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTg3NDU4ZWY4ZWZjOTQ5ZTk4ZmNhZmU1ZjQwYzdlMiIsIm5iZiI6MTczMjEzMjAyOC4wMjIsInN1YiI6IjY3M2UzY2JjNGRlYzFmOThiMjliY2U3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r5-yIK5QFHU4J3t1QI9IwgtIngAX6Hc4Titw_kPyjUI'
  }
};



 
useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
  .then(res => res.json())
  .then(res => setMovie(res))
  .catch(err => console.error(err));
  
fetch(
  `https://api.themoviedb.org/3/movie/${id}/recommendations?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setRecommendations(res.results || [] ))
  .catch(err => console.error(err));
}, [id]);

  if(!movie){
    return (
    <div className = "flex item-center justify-center h-screen">
        <span className = "text-xl text-red-500">Loading...</span>
        </div>
    );
  }

  



  return (
    <div className = "min-h-screen bg-[#181818] text-white">
      <div className = "relative h-[60vh] flex item-end" style={
        {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
            
         }}
      >
        <div className = "absolute inset-0 bg-gradient-to-t from-[#181818] via-transparent to-transparent"></div>
        
        <div className="relative z-10 flex items-end p-9 gap-8"> 
            <img 
            src = {`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            className="rounded-lg shadow-lg w-48 hidden md:block"
            />

            <div> 
                <h1 className="text-4xl font-bold mb-2">{movie.title}</h1>
                <div className = "flex items-center gap-4 mb-2">
                    <span> ⭐{movie.vote_average?.toFixed(1)}</span>
                    <span>{movie.release_date}</span>
                    <span>{movie.runtime} min</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    {movie.genres.map((genre) => (
                        <span className  = " bg-gray-800 px-3 py-1 rounded-full text-sm">
                            {genre.name}
                        </span>
                    ))}
                </div>
                <p className="max-w-2xl text-grey-200">{movie.overview}</p>
                  <button className='flex justify-center items-center bg-[#e50914] hover:bg-gray-200 text-white py-3 px-4 rounded-full 
        cursor-pointer text-sm md:text-base mt-2 md:mt-4'>
          
          <Play className='mr-2 w-4 h-5 md:w-5 h-5' /> 
        Watch Now</button>
            </div>
          </div>
      </div>



      <div className = "p-8">
        <h2 className = "text-2xl font-semibold mb-4">Details</h2>
        <div className = "bg-[#232323] rounded-lg shadow-lg p-6 flex flex-col
        md:flex-row gap-8">
          <div className = "flex-1">
            <ul className = "text-gray-300 space-y-3">
              <li>
                <span className="font-semibold text-white">Status: </span>
                <span className="ml-2">{movie.status}</span>
              </li>

              <li>
                <span className="font-semibold text-white">Release Date: </span>
                <span className="ml-2">{movie.release_date}</span>
              </li>

              <li>
                <span className="font-semibold text-white">Original Language</span>
                <span className="ml-2">{movie.original_language?.toUpperCase()}</span>


              </li>


            </ul>
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white mb-2">Tagline</h3>
            <p className="italic text-gray-300 mb-6">{movie.tagline || "No tagline available"}</p>

            <h3 className="font-semibold text-white mb-2">Overview</h3>
            <p className="text-gray-200">{movie.overview}</p>
          </div>

        </div>
        

      </div>


    </div>
  )
}

export default MoviePage

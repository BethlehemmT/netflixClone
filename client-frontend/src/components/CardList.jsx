import React from 'react'
import Sinner from '../assets/new-sinner.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useEffect } from 'react';
import {Link} from "react-router";



const CardList = ({title, category}) => {
const[data, setData] = useState([]);
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTg3NDU4ZWY4ZWZjOTQ5ZTk4ZmNhZmU1ZjQwYzdlMiIsIm5iZiI6MTczMjEzMjAyOC4wMjIsInN1YiI6IjY3M2UzY2JjNGRlYzFmOThiMjliY2U3NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.r5-yIK5QFHU4J3t1QI9IwgtIngAX6Hc4Titw_kPyjUI'
  }
};

useEffect(() => {
  fetch(
    `https://api.themoviedb.org/3/movie/${category}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setData(res.results))
  .catch(err => console.error(err));}, []);

   






return(
    <div className="text-white md:px-4">
        <h2 className ="pt-10 pb-5 text-lg font-medium">Upcoming</h2>
        
        <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
            {data.map((item, index) => (
                <SwiperSlide key={index} className="max-w-72">
                    <Link to={`/movie/${item.id}`}>
                    <img 
                    src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`} 
                    alt="" 
                    className="h-44 w-full object-center object-cover"/>
                    <p className="text-center pt-2">{item.original_title}</p>
                </Link>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);
};

export default CardList;

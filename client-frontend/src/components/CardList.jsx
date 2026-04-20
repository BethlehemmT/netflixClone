import React from 'react'
import Sinner from '../assets/new-sinner.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const CardList = () => {
    const data = [
        {
            id:1,
            title: 'Movie 1',
            description: 'This is the description for Movie 1',
            image: 'https://via.placeholder.com/150'
        },

        {
            id:2,
            title: 'Movie 2',
            description: 'This is the description for Movie 2',
            image: 'https://via.placeholder.com/150'
        },

        {
            id:3,
            title: 'Movie 3',
            description: 'This is the description for Movie 3',
            image: 'https://via.placeholder.com/150'    
        },
        {
            id:1,
            title: 'Movie 1',
            description: 'This is the description for Movie 1',
            image: 'https://via.placeholder.com/150'
        },

        {
            id:2,
            title: 'Movie 2',
            description: 'This is the description for Movie 2',
            image: 'https://via.placeholder.com/150'
        },

        {
            id:3,
            title: 'Movie 3',
            description: 'This is the description for Movie 3',
            image: 'https://via.placeholder.com/150'    
        },
        {
            id:1,
            title: 'Movie 1',
            description: 'This is the description for Movie 1',
            image: 'https://via.placeholder.com/150'
        },

        {
            id:2,
            title: 'Movie 2',
            description: 'This is the description for Movie 2',
            image: 'https://via.placeholder.com/150'
        },

        {
            id:3,
            title: 'Movie 3',
            description: 'This is the description for Movie 3',
            image: 'https://via.placeholder.com/150'    
        },

    ];



return(
    <div className="text-white md:px-4">
        <h2 className ="pt-10 pb-5 text-lg font-medium">Upcoming</h2>
        
        <Swiper slidesPerView={"auto"} spaceBetween={10} className="mySwiper">
            {data.map((item, index) => (
                <SwiperSlide key={index} className="max-w-72">
                    <img src={Sinner} alt=" " className="h-44 w-full object-center object-cover"/>
                    <p className="text-center pt-2">{item.title}</p>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);
};

export default CardList;

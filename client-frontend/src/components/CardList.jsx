import React from 'react'
import Sinner from '../assets/new-sinner.jpg'


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
        }

    ];



  return (
    <div className ='text-white md:px-4'>

        <h2 className='pt-5 pb-5 text-lg font-medium'>Upcoming</h2>

        <div>
        {data.map((item) =>(
            <div>
                <img src={Sinner} alt="" />
                <p> a very good movie</p>
            </div>
            ))}
         </div>
    </div>
  );
};

export default CardList;

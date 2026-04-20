import React from 'react'
import Herobg from '../assets/new-sinner.jpg'
import { Bookmark } from 'lucide-react'
import { Play } from 'lucide-react'



const Hero = () => {
  return (
    <div className='text-white relative'>
      <img src={Herobg} alt="bg-img" className='w-full rounded-2xl h-[480px] 
      object-center object-cover' />

      <div className='flex space-x-2 md:space-x-4 absolute bottom-4 left-4 md:button-8 md:left-10 font-medium '>
        <button className='flex justify-center items-center bg-white hover:bg-gray-200 text-[#e50914] py-3 px-4 rounded-full 
        cursor-pointer text-sm md:text-base'>
          
          <Bookmark className='mr-2 w-4 h-5 md:w-5 h-5'/>
        Save for Later</button>
        
        
        <button className='flex justify-center items-center bg-[#e50914] hover:bg-gray-200 text-white py-3 px-4 rounded-full 
        cursor-pointer text-sm md:text-base'>
          
          <Play className='mr-2 w-4 h-5 md:w-5 h-5' /> 
        Watch Now</button>
        
        
        
        
       
      </div>
    </div>
  )
}



export default Hero

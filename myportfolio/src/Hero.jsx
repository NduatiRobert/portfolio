import React from 'react'
import profile from "./assets/ROBERT.JPG"

const Hero = () => {
  return (
    <div className='flex items-center gap-16 flex-col'>
        <img src={profile} className='rounded-full' />
        <h3 className='font-bold text-4xl p-5'>I am Nduati Robert Njuguna, web developer in Kenya.</h3>
        <p>I am a frontend developer from California, 
            USA with 10 years of experience in multiple 
            companies like Microsoft, Tesla and Apple.
        </p>

        <div className='gap-10 flex-row justify-between inline-flex p-10'>
            <button className='m-4 p-4 bg-red-600 rounded-xl text-white font-bold'>My Resume</button>
            <button className='m-4 p-4 bg-red-600 rounded-xl text-white font-bold'>Contact Me</button>
        </div>
      
    </div>
  )
}

export default Hero

import React from 'react'

import logo from "./assets/developer.png"
const Navbar = () => {
  return (
    <div className= "flex justify-between items-center m-5">
        <img  className = 'inline m-4 rounded-full'  src={logo} />
    <ul className="flex items-center list-none gap-10 text-xl  font-bold">
        <li className='hover:text-green-50 hover:underline'>Home</li>
        <li  className='hover:text-green-50 hover:underline'>About Me</li>
        <li  className='hover:text-green-50 hover:underline'>Skills</li>
        <li  className='hover:text-green-50 hover:underline'>Projects</li>
    </ul>
      
    </div>
  );
}

export default Navbar

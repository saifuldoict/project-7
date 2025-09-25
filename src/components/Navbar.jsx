import React from 'react'

const Navbar = () => {
  return (
    <div>
        
<div className="navbar max-w-[1200px] mx-auto shadow-2xl">
  <div className="flex-1">
    <h1 className='font-bold'>CS — Ticket System</h1>
  </div>
  <div className="">
    <ul className="flex items-center gap-4">
      <li><a>Home</a></li>
      <li><a>FAQ</a></li>
      <li><a>Changelog</a></li>
      <li><a>Blog</a></li>
      <li><a>Download</a></li>
      <li><a>Contact</a></li>
    </ul>
  </div>
  <button className='ml-4 bg-gradient-to-r from-[#422AD5] to-[#7867e9] text-white p-2 rounded-lg'>+New Ticket</button>
  
</div>
    </div>
  )
}

export default Navbar
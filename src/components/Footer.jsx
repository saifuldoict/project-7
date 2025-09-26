import React from 'react'
import fi_5969020 from '../assets/fi_5969020.png'
import fi_145807 from '../assets/fi_145807.png'
import fi_5968764 from '../assets/fi_5968764.png'
import fi_6244710 from '../assets/fi_6244710.png'
const Footer = () => {
  return (
    <div className=' bg-black mt-3 max-w-[1200px] mx-auto'>
        <div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-3 text-white p-3  ml-3'>
                  <div >
                      <h1 className='font-bold mb-3'>CS — Ticket System</h1>
                      <p className='text-gray-500'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  </div>
                <div >
                    <h1 className='font-bold mb-3'>Company</h1>
                    <ul className='text-gray-500 '>
                      <li><a href="">About Us</a></li>
                      <li><a href="">Our Mission</a></li>
                      <li><a href="">Contact Saled</a></li>
                    </ul>
                </div>
                <div >
                  <h1 className=' font-bold mb-3'>Services</h1>
                  <ul className='text-gray-500'>
                    <li><a href="">Products & Services</a></li>
                    <li><a href="">Customer Stories</a></li>
                    <li><a href="">Download Apps</a></li>
                  </ul>
                </div>
                <div >
                  <h1 className='font-bold mb-3 '>Social Links</h1>
                  <ul className='text-gray-500'>
                    <li><img src={fi_5969020}/><a href="">@CS — Ticket System</a></li>
                    <li><img src={fi_145807}/><a href="">@CS — Ticket System</a></li>
                    <li><img src={fi_5968764}/><a href="">@CS — Ticket System</a></li>
                    <li><img src={fi_6244710}/><a href="">support@cst.com</a></li>
                  </ul>
                </div>
            </div>
          
       </div>
        <h5 className='w-full justify-center text-center'>© 2025 CS — Ticket System. All rights reserved.</h5>
    </div>
  ) 
}

export default Footer
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-2xl text-gray-800">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <h1 className="font-bold text-lg">CS—Ticket System</h1>
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6">
              <li><a href="#">Home</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Changelog</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Download</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <button className="ml-4 bg-gradient-to-r from-[#422AD5] to-[#7867e9] text-white px-4 py-2 rounded-lg">
              + New Ticket
            </button>
          </div>

         
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none">
           
              {isOpen ? (
                <ImCross className="cursor-pointer"/>
                
              ) : (
                <FiMenu className="cursor-pointer"/>
              )}
            </button>
          </div>
        </div>
      </div>

    
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-4 p-4">
            <li><a href="#">Home</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Changelog</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Download</a></li>
            <li><a href="#">Contact</a></li>
            <button className="w-full bg-gradient-to-r from-[#422AD5] to-[#7867e9] text-white px-4 py-2 rounded-lg">
              + New Ticket
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

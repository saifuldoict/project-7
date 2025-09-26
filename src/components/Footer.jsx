import React from 'react'
import fi_5969020 from '../assets/fi_5969020.png'
import fi_145807 from '../assets/fi_145807.png'
import fi_5968764 from '../assets/fi_5968764.png'
import fi_6244710 from '../assets/fi_6244710.png'

const Footer = () => {
  return (
    <div className="bg-black mt-6">
      <div className="max-w-[1200px] mx-auto px-4 py-8">
        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-white">
          {/* Brand Info */}
          <div>
            <h1 className="font-bold text-lg mb-3">CS — Ticket System</h1>
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s.
            </p>
          </div>

          {/* Company */}
          <div>
            <h1 className="font-bold text-lg mb-3">Company</h1>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Mission</a></li>
              <li><a href="#">Contact Sales</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h1 className="font-bold text-lg mb-3">Services</h1>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#">Products & Services</a></li>
              <li><a href="#">Customer Stories</a></li>
              <li><a href="#">Download Apps</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h1 className="font-bold text-lg mb-3">Social Links</h1>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <img src={fi_5969020} alt="Facebook" className="w-5 h-5" />
                <a href="#">@CS — Ticket System</a>
              </li>
              <li className="flex items-center gap-2">
                <img src={fi_145807} alt="Twitter" className="w-5 h-5" />
                <a href="#">@CS — Ticket System</a>
              </li>
              <li className="flex items-center gap-2">
                <img src={fi_5968764} alt="Instagram" className="w-5 h-5" />
                <a href="#">@CS — Ticket System</a>
              </li>
              <li className="flex items-center gap-2">
                <img src={fi_6244710} alt="Email" className="w-5 h-5" />
                <a href="mailto:support@cst.com">support@cst.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Copyright */}
        <h5 className="text-center text-gray-500 text-sm">
          © 2025 CS — Ticket System. All rights reserved.
        </h5>
      </div>
    </div>
  )
}

export default Footer

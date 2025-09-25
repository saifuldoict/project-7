import React from 'react'
import elips from '../assets/Ellipse.png'
import clen from '../assets/clen.png'

const TicketCard = ({ ticket, onCardClick }) => {
  return (
    <div
      onClick={onCardClick}
      className="cursor-pointer transition-transform hover:scale-[1.02]"
    >
      <div className="card bg-base-100 shadow-lg p-3 sm:p-4 rounded-xl">
        {/* Top row */}
        <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-0">
          <h3 className="font-bold text-base sm:text-lg">{ticket.title}</h3>
          <button className="bg-[#b9f8cf] rounded-3xl text-[#046526] flex items-center gap-1 px-3 py-1 text-sm sm:text-base">
            <img src={elips} alt="" className="w-4 sm:w-5" /> Open
          </button>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base mt-2">{ticket.description}</p>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mt-3 gap-2 sm:gap-0">
          <div className="flex gap-2 text-sm sm:text-base">
            <p>#{ticket.id}</p>
            <p>{ticket.priority}</p>
          </div>
          <div className="flex gap-2 items-center text-sm sm:text-base">
            <h1 className="font-medium">{ticket.customer}</h1>
            <p className="flex items-center gap-1 text-xs sm:text-sm text-gray-500">
              <img src={clen} className="w-4 sm:w-5" alt="" /> {ticket.createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TicketCard

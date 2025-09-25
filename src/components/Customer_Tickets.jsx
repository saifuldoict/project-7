import React, { use, useState } from 'react'
import TicketCard from './TicketCard'
import Task from './Task'

const Customer_Tickets = ({ trcketPromise }) => {
  const data = use(trcketPromise)

  const [allTickets, setAllTickets] = useState(data)
  const [inProgress, setInProgress] = useState(0)
  const [resolved, setResolved] = useState(0)
  const [selectedTickets, setSelectedTickets] = useState([])

  const handleCardClick = (ticket) => {
    setInProgress(inProgress + 1)
    setSelectedTickets([...selectedTickets, ticket])
  }

  const handleComplete = (ticketId) => {
    setSelectedTickets(selectedTickets.filter((t) => t.id !== ticketId))
    setAllTickets(allTickets.filter((t) => t.id !== ticketId))
    setInProgress(inProgress - 1)
    setResolved(resolved + 1)
  }

  return (
    <div className="max-w-[1200px] mx-auto px-3">
      {/* ✅ Stats section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-3">
        <div className="flex flex-col justify-center items-center h-[200px] bg-gradient-to-r from-[#8a7ce7] to-[#67afe9] text-white p-3 rounded-lg">
          <h1>In-Progress</h1>
          <p className="text-4xl font-bold">{inProgress}</p>
        </div>
        <div className="flex flex-col justify-center items-center h-[200px] bg-gradient-to-r from-[#54cf68] to-[#01827b] text-white p-3 rounded-lg">
          <h1>Resolved</h1>
          <p className="text-4xl font-bold">{resolved}</p>
        </div>
      </div>

      {/* ✅ Ticket + Task layout */}
      <h1 className="text-2xl md:text-3xl font-bold text-gray-400 mt-4">
        Customer Tickets
      </h1>
      <div className="flex flex-col lg:flex-row mt-3 gap-4">
        {/* Tickets grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 flex-1">
          {allTickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onCardClick={() => handleCardClick(ticket)}
            />
          ))}
        </div>

        {/* Task panel */}
        <div className="w-full lg:w-[35%]">
          <Task
            tickets={selectedTickets}
            onComplete={handleComplete}
            inProgress={inProgress}
            resolved={resolved}
          />
        </div>
      </div>
    </div>
  )
}

export default Customer_Tickets

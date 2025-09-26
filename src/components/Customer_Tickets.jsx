import React, { use, useState } from 'react'
import TicketCard from './TicketCard'
import Task from './Task'
import vector from '../assets/vector1.png'
import { toast } from 'react-toastify'
//import 'react-toastify/dist/ReactToastify.css'


const Customer_Tickets = ({ticketPromise}) => {
  const data = use(ticketPromise)
  const [allTickets, setAllTickets] = useState(data)

  const [inProgress, setInProgress] = useState(0)
  const [resolved, setResolved] = useState(0)
  const [selectedTickets, setSelectedTickets] = useState([])

  const handleCardClick = (ticket) => {
    setInProgress(inProgress + 1)
    setSelectedTickets([...selectedTickets, ticket])
    toast.info(`Ticket "${ticket.title}" moved to In-Progress`)
  }

  const handleComplete = (ticketId) => {
    const completedTicket = selectedTickets.find((t) => t.id === ticketId)
    setSelectedTickets(selectedTickets.filter((t) => t.id !== ticketId))
    setAllTickets(allTickets.filter((t) => t.id !== ticketId))
    setInProgress(inProgress - 1)
    setResolved(resolved + 1)
    toast.success(`Ticket "${completedTicket.title}" marked as Resolved `)
  }

  return (
    <div className="max-w-[1200px] mx-auto px-3">
   
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-3">
        <div className=" flex flex-col justify-center items-center h-[200px] bg-gradient-to-r from-[#8a7ce7] to-[#67afe9] text-white p-3 rounded-lg relative">
          <img src={vector} className='w-full h-full object-cover absolute mix-blend-color-overlay'/>
          <h1>In-Progress</h1>
          <p className="text-4xl font-bold">{inProgress}</p>
        </div>
        <div className="flex flex-col justify-center items-center h-[200px] bg-gradient-to-r from-[#54cf68] to-[#01827b] text-white p-3 rounded-lg relative">
          <img src={vector} className='w-full h-full object-cover absolute mix-blend-plus-darker'/>
          <h1>Resolved</h1>
          <p className="text-4xl font-bold">{resolved}</p>
        </div>
      </div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-400 mt-4">
        Customer Tickets
      </h1>
      <div className="flex flex-col lg:flex-row mt-3 gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 flex-1">
          {allTickets.map((ticket) => (
            <TicketCard ticket={ticket} onCardClick={()=>handleCardClick(ticket)}/>
          ))}
        </div>
 
        <div className=" lg:w-[25%]  ">
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

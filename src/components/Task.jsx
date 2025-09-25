import React from 'react'

const Task = ({ tickets, onComplete, inProgress, resolved }) => {
  return (
    <div className="card bg-base-100 shadow-lg p-2 rounded-xl">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-400">Task Status</h1>

      

      {/* Tickets list */}
      <div className="space-y-3">
        {tickets.length > 0 ? (
          tickets.map((t) => (
            <div
              key={t.id}
              className=" p-3 rounded-md bg-gray-50 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2"
            >
              <div>
                <h2 className="font-semibold">{t.title}</h2>
              <button
                onClick={() => onComplete(t.id)}
                className="bg-green-600 text-white px-2 py-1 rounded-md w-full"
              >
                Complete
              </button>
              </div>
              
            </div>
          ))
        ) : (
          <p className="text-gray-500">Select a ticket to add to Task Status</p>
        )}
      </div>
      {/* Status counts */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4 mb-5">
        
        
      </div>
      <div className="bg-green-200 text-green-800 px-4 py-2 rounded-lg text-center">
          Resolved: <strong>{resolved}</strong>
        </div>
    </div>
  )
}

export default Task

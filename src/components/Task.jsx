import React from 'react'

const Task = ({ tickets, onComplete, resolved }) => {
  return (
    <div className="card bg-white shadow-2xl p-2 rounded-xl">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-400">Task Status</h1>

      <div className="space-y-3">
        {tickets.length > 0 ? (
          tickets.map((t) => (
            <div className="bg-white p-2.5 shadow-2xl">
              <div>
                  <h2 className="font-semibold text-black">{t.title}</h2>
                  <button onClick={() => onComplete(t.id)} className="bg-green-600 text-white px-2 py-2 rounded-lg text-center w-full cursor-pointer">
                   Complete
                  </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No resolved tasks yet.</p>
        )}
      </div>
       <div className="flex flex-col sm:flex-row justify-center gap-3 mt-4 mb-5">  
      </div> 
      <div className="bg-green-200 text-green-800 px-4 py-2 rounded-lg text-center">
          Resolved: <strong>{resolved}</strong>
        </div>
    </div>
  )
}

export default Task

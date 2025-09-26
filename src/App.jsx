import './App.css'
import Customer_Tickets from './components/Customer_Tickets.jsx'
import Footer from './components/Footer.jsx'

import Home from './components/Home.jsx'
import { Suspense } from 'react'

import { ToastContainer } from 'react-toastify';

const fetchTickets = async ()=>{
  const res = await fetch("/customer_Tickets.json")
  return res.json()
}


function App() {
  const trcketPromise = fetchTickets()
 
  return (
    <>
      <div>
      <Home/>
      <Suspense >
         <Customer_Tickets trcketPromise={trcketPromise}/> 
      </Suspense>

      <Footer/>
      <ToastContainer position="top-right" autoClose={2000}/>
      </div> 
    </>
  )
}

export default App

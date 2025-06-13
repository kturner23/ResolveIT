import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TicketForm from './Pages/TicketForm'
import KnowledgeBase from './Components/KnowledgeBase'
import TechnicianDashboard from './Components/TechnicianDashboard'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const notify = () => toast("ResolveIT UI is live!")

  return (
    <Router>
      <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
        <h1>ResolveIT Helpdesk System</h1>
        <p>This is a starter layout for your frontend development.</p>
        <button onClick={notify}>Test Toast</button>
        <ToastContainer />

        <Routes>
          <Route path="/" element={<TicketForm />} />
          <Route path="/knowledgebase" element={<KnowledgeBase />} />
          <Route path="/dashboard" element={<TechnicianDashboard />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

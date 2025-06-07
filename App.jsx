import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TechnicianDashboard from './pages/TechnicianDashboard';
import TicketFrom from './common/TicketForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import KnowledgeBase from './pages/KnowledgeBase';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TicketForm />} />
        <Route path="/dashboard" element={<TechnicianDashboard />} />
      </Routes>
    </BrowserRouter>
  );	
  const notify = () => toast("ResolveIT UI is live!");

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>ResolveIT Helpdesk System</h1>
      <p>This is a starter layout for your frontend development.</p>
      <button onClick={notify}>Test Toast</button>
      <ToastContainer />
    </div>
  )
  <Routes>
  <Route path="/knowledgebase" element={<KnowledgeBase />} />
  </Routes>
}

export default App

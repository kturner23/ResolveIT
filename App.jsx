import React from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App() {
  const notify = () => toast("ResolveIT UI is live!");

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>ResolveIT Helpdesk System</h1>
      <p>This is a starter layout for your frontend development.</p>
      <button onClick={notify}>Test Toast</button>
      <ToastContainer />
    </div>
  )
}

export default App

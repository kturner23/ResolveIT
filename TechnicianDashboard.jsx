import React, { useState } from 'react'

function TechnicianDashboard() {
  const [tickets, setTickets] = useState(mockTickets)

  return (
    <div>
      <h2>Technician Dashboard</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>ID</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Subject</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Status</th>
            <th style={{ borderBottom: '1px solid #ccc', textAlign: 'left' }}>Priority</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.subject}</td>
              <td>{ticket.status}</td>
              <td>{ticket.priority}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TechnicianDashboard


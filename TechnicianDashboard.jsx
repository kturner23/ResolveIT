import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TechnicianDashboard() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Replace with your actual API endpoint
    axios.get("http://localhost:5000/api/tickets")
      .then(response => setTickets(response.data))
      .catch(err => console.error("Error loading tickets:", err));
  }, []);

  const handleStatusChange = (ticketId, newStatus) => {
    axios.patch(`http://localhost:5000/api/tickets/${ticketId}`, { status: newStatus })
      .then(() => {
        setTickets(prev =>
          prev.map(ticket =>
            ticket._id === ticketId ? { ...ticket, status: newStatus } : ticket
          )
        );
      });
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Technician Dashboard</h2>
      <table border="1" cellPadding="8" width="100%">
        <thead>
          <tr>
            <th>Title</th>
            <th>Priority</th>
            <th>Status</th>
            <th>User</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map(ticket => (
            <tr key={ticket._id}>
              <td>{ticket.title}</td>
              <td>{ticket.priority}</td>
              <td>{ticket.status}</td>
              <td>{ticket.user?.name || 'Unassigned'}</td>
              <td>
                <select
                  value={ticket.status}
                  onChange={(e) => handleStatusChange(ticket._id, e.target.value)}
                >
                  <option value="Open">Open</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Resolved">Resolved</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TechnicianDashboard;

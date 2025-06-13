import React from 'react'

function TicketForm() {
  return (
    <div>
      <h2>Submit a Ticket</h2>
      <form>
        <input type="text" placeholder="Subject" /><br />
        <textarea placeholder="Describe your issue..."></textarea><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Send formData to backend API using axios
    toast.success('Ticket submitted successfully!');
    console.log(formData); // Just logs for now
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '500px', margin: 'auto' }}>
      <h2>Submit a Ticket</h2>

      <label>Title</label>
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <label>Description</label>
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <label>Priority</label>
      <select
        name="priority"
        value={formData.priority}
        onChange={handleChange}
      >
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>

      <button type="submit" style={{ marginTop: '10px' }}>Submit</button>
    </form>
  );
}

export default TicketForm

import React, { useState } from 'react'

const sampleArticles = [
  { id: 1, title: "Resetting Your Password", content: "Follow these steps to reset your password..." },
  { id: 2, title: "Connecting to VPN", content: "Here's how to securely connect to the enterprise VPN..." },
  { id: 3, title: "Common Printer Issues", content: "Fix paper jams and driver errors with this guide..." }
]

function KnowledgeBase() {
  const [search, setSearch] = useState("")
  const filteredArticles = sampleArticles.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h2>Knowledge Base</h2>
      <input
        type="text"
        placeholder="Search articles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />
      {filteredArticles.map(article => (
        <div key={article.id} style={{ marginBottom: '1.5rem' }}>
          <h4>{article.title}</h4>
          <p>{article.content}</p>
          <hr />
        </div>
      ))}
    </div>
  )
}

export default KnowledgeBase

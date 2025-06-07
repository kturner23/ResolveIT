import React, { useEffect, useState } from 'react';
import axios from 'axios';

function KnowledgeBase() {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get("http://localhost:5000/api/articles")
      .then(res => setArticles(res.data))
      .catch(err => console.error("Error fetching articles:", err));
  }, []);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Knowledge Base</h2>

      <input
        type="text"
        placeholder="Search articles..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "1rem" }}
      />

      {filteredArticles.length > 0 ? (
        filteredArticles.map(article => (
          <div key={article._id} style={{
            border: "1px solid #ccc",
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "8px"
          }}>
            <h3>{article.title}</h3>
            <p>{article.content.slice(0, 200)}...</p>
            <button onClick={() => alert("View full article (modal or page to be added)")}>
              Read More
            </button>
          </div>
        ))
      ) : (
        <p>No articles found.</p>
      )}
    </div>
  );
}

export default KnowledgeBase;

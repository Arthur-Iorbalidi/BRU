import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [paintings, setPaintings] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const [data, setData] = useState('');
  const [format, setFormat] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3001/api/paintings')
      .then(response => setPaintings(response.data))
      .catch(error => console.error(error));

    axios.get('http://localhost:3001/api/favorites')
    .then(response => setFavorites(response.data))
    .catch(error => console.error(error));
  }, []);

  const addToFavorites = (id) => {
    axios.post('http://localhost:3001/api/favorites', { id })
      .then(response => setFavorites(response.data))
      .catch(error => console.error(error));
  };

  const removeFromFavorites = (id) => {
    axios.delete(`http://localhost:3001/api/favorites/${id}`)
      .then(response => setFavorites(response.data))
      .catch(error => console.error(error));
  };

  const getDataInFormat = (format) => {
    let headers = {};

    if (format === 'json') {
      headers['Accept'] = 'application/json';
    } else if (format === 'xml') {
      headers['Accept'] = 'application/xml';
    } else if (format === 'html') {
      headers['Accept'] = 'text/html';
    }

    axios.get('http://localhost:3001/api/paintings/formatted', { headers })
      .then(response => {
        setData(response.data);
        setFormat(format);
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h1>Paintings</h1>
      <ul>
        {paintings.map(p => (
          <li key={p.id}>
            {p.title} by {p.author} ({p.date})
            <button onClick={() => addToFavorites(p.id)}>Add to Favorites</button>
          </li>
        ))}
      </ul>

      <h2>Favorites</h2>
      <ul>
        {favorites.map(f => (
          <li key={f.id}>
            {f.title} by {f.author} ({f.date})
            <button onClick={() => removeFromFavorites(f.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <button onClick={() => getDataInFormat('json')}>Get JSON</button>
        <button onClick={() => getDataInFormat('xml')}>Get XML</button>
        <button onClick={() => getDataInFormat('html')}>Get HTML</button>
      </div>

      <h2>Data in {format.toUpperCase()} format:</h2>
      
      <div style={{ whiteSpace: 'pre-wrap' }}>
        {typeof data === 'string' ? data : JSON.stringify(data, null, 2)}
      </div>
    </div>
  );
}

export default App;

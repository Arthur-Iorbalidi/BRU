const fs = require('fs').promises;
const dataPath = './data/paintings.json';
const favoritesPath = './data/favorites.json';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');


const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.get('/api/paintings', async (req, res) => {
  try {
    const data = await fs.readFile(dataPath, 'utf8');
    const paintings = JSON.parse(data);
    res.json(paintings);
  } catch (error) {
    res.status(500).json({ message: 'Error reading data' });
  }
});

app.get('/api/favorites', async (req, res) => {
  try {
    const data = await fs.readFile(favoritesPath, 'utf8');
    const paintings = JSON.parse(data);
    res.json(paintings);
  } catch (error) {
    res.status(500).json({ message: 'Error reading data' });
  }
});

app.post('/api/favorites', async (req, res) => {
  const { id } = req.body;
  try {
    const data = await fs.readFile(dataPath, 'utf8');
    const paintings = JSON.parse(data);
    const painting = paintings.find(p => p.id === id);

    if (!painting) {
      return res.status(404).json({ message: 'Painting not found' });
    }

    const favoritesData = await fs.readFile('./data/favorites.json', 'utf8');
    const favorites = JSON.parse(favoritesData);
    console.log(favorites)

    if (favorites.some(fav => fav.id === id)) {
      return res.status(400).json({ message: 'Painting already in favorites' });
    }

    favorites.push(painting);
    await fs.writeFile('./data/favorites.json', JSON.stringify(favorites));
    res.json(favorites);

  } catch (error) {
    res.status(500).json({ message: 'Error processing data' });
  }
});

app.get('/api/paintings/formatted', async (req, res) => {
  try {
    const data = await fs.readFile(dataPath, 'utf8');
    const paintings = JSON.parse(data);
    const accept = req.headers.accept;

    if (accept.includes('application/xml')) {
      let xmlData = '<?xml version="1.0" encoding="UTF-8"?><paintings>';
      paintings.forEach(p => {
        xmlData += `<painting><title>${p.title}</title><author>${p.author}</author><date>${p.date}</date></painting>`;
      });
      xmlData += '</paintings>';
      res.header('Content-Type', 'application/xml');
      return res.send(xmlData);
    }
    
    if (accept.includes('text/html')) {
      let htmlData = '<html><body><ul>';
      paintings.forEach(p => {
        htmlData += `<li>${p.title} by ${p.author} (${p.date})</li>`;
      });
      htmlData += '</ul></body></html>';
      res.header('Content-Type', 'text/html');
      return res.send(htmlData);
    }

    res.json(paintings);
  } catch (error) {
    res.status(500).json({ message: 'Error processing data' });
  }
});

app.delete('/api/favorites/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  try {
    const data = await fs.readFile('./data/favorites.json', 'utf8');
    let favorites = JSON.parse(data);

    const updatedFavorites = favorites.filter(f => f.id !== id);
    if (favorites.length === updatedFavorites.length) {
      return res.status(404).json({ message: 'Painting not found in favorites' });
    }

    await fs.writeFile('./data/favorites.json', JSON.stringify(updatedFavorites));
    res.json(updatedFavorites);
  } catch (error) {
    res.status(500).json({ message: 'Error processing data' });
  }
});

app.post('/api/paintings', async (req, res) => {
  const newPainting = req.body;
  try {
    const data = await fs.readFile(dataPath, 'utf8');
    const paintings = JSON.parse(data);
    paintings.push(newPainting);

    await fs.writeFile(dataPath, JSON.stringify(paintings));
    res.json(paintings);
  } catch (error) {
    res.status(500).json({ message: 'Error processing data' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

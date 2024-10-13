const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'movies_catalog.json');

const writeDataToFile = (data) => {
    const writeStream = fs.createWriteStream(filePath, { flags: 'a' });

    writeStream.write(data);
    writeStream.end();

    writeStream.on('finish', () => {
        console.log('Запись завершена.');
    });

    writeStream.on('error', (err) => {
        console.error('Ошибка при записи файла:', err);
    });
};

const newMovie = JSON.stringify([{
    id: Date.now(),
    title: "Call of the Wild",
    director: "Chris Sunders",
    year: 2018,
    genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Call of the Wild",
  director: "Chris Sunders",
  year: 2018,
  genre: "adventure"
},
{
  id: Date.now(),
  title: "Ministry of Ungentlemanly Affairs",
  director: "Guy Ritchie",
  year: 2024,
  genre: "action movie"
}
], null, 2);

writeDataToFile(newMovie + '\n', filePath);

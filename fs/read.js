const fs = require('fs');
const path = require('path');

const readMovie = (id) => {
    const indexPath = path.join(__dirname, 'movies', 'movies_index.json');
    const index = JSON.parse(fs.readFileSync(indexPath));
    const movie = index.find(movie => movie.id === id);

    if (!movie) {
        console.error('Ошибка: Фильм не найден.');
        return;
    }

    const moviePath = path.join(__dirname, 'movies', movie.filename);
    const movieData = fs.readFileSync(moviePath);

    console.log('Информация о фильме:');
    console.log(movieData.toString());
};

const id = process.argv[2];

if (id) {
    readMovie(id);
} else {
    console.log('Использование: node read.js <id фильма>');
}

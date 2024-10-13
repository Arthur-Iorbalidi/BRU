const fs = require('fs');
const path = require('path');

const listMovies = () => {
    const indexPath = path.join(__dirname, 'movies', 'movies_index.json');

    if (fs.existsSync(indexPath)) {
        const index = JSON.parse(fs.readFileSync(indexPath));
        console.log('Список всех фильмов:');
        index.forEach(movie => {
            console.log(`${movie.id}: ${movie.title} (${movie.director})`);
        });
    } else {
        console.log('Записей пока нет.');
    }
};

listMovies();

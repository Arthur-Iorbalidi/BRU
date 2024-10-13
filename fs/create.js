const fs = require('fs');
const path = require('path');

const movieDir = path.join(__dirname, 'movies');
const indexFile = path.join(movieDir, 'movies_index.json');

fs.mkdirSync(movieDir, { recursive: true });

const createMovie = (title, director, year, genre) => {
    const id = Date.now().toString();
    const filename = `movie_${id}.json`;
    const movieData = { id, title, director, year, genre };

    const moviePath = path.join(movieDir, filename);

    if (fs.existsSync(moviePath)) {
        console.error('Ошибка операции FS: Запись уже существует');
        return;
    }

    fs.writeFileSync(moviePath, JSON.stringify(movieData, null, 2));

    const index = fs.existsSync(indexFile) ? JSON.parse(fs.readFileSync(indexFile)) : [];
    index.push({ id, title, director, filename });
    fs.writeFileSync(indexFile, JSON.stringify(index, null, 2));

    console.log(`Фильм "${title}" был успешно добавлен.`);
};

// Получаем аргументы командной строки
const [title, director, year, genre] = process.argv.slice(2);

if (title && director && year && genre) {
    createMovie(title, director, year, genre);
} else {
    console.log('Использование: node create.js <название фильма> <режиссер> <год> <жанр>');
}

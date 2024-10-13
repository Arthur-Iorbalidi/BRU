const fs = require('fs');
const path = require('path');

const deleteMovie = (id) => {
    const indexPath = path.join(__dirname, 'movies', 'movies_index.json');
    const index = JSON.parse(fs.readFileSync(indexPath));
    const movie = index.find(movie => movie.id === id);

    if (!movie) {
        console.error('Ошибка: Запись не найдена.');
        return;
    }
    console.log(movie.filename)
    const moviePath = path.join(__dirname, 'movies', movie.filename);

    if (fs.existsSync(moviePath)) {
        fs.unlinkSync(moviePath);
        console.log(`Фильм с ID ${id} был удален.`);
        
        const updatedIndex = index.filter(movie => movie.id !== id);
        fs.writeFileSync(indexPath, JSON.stringify(updatedIndex, null, 2));
    } else {
        console.error('Ошибка: Файл не найден.');
    }
};

const id = process.argv[2];

if (id) {
    deleteMovie(id);
} else {
    console.log('Использование: node delete.js <id фильма>');
}

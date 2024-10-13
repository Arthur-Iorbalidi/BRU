const { Transform } = require('stream');

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        this.push(chunk.toString().toUpperCase());
        callback();
    }
});

const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'movies_catalog.json');
const outputFile = path.join(__dirname, 'movies_catalog_uppercase.json');

const readStream = fs.createReadStream(inputFile, { encoding: 'utf8' });
const writeStream = fs.createWriteStream(outputFile);

readStream.pipe(upperCaseTransform).pipe(writeStream);

writeStream.on('finish', () => {
    console.log('Трансформация завершена.');
});

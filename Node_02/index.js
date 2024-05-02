// Reading a file 
const fs = require('fs');
// Asynchronous method
fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log(' Asynchronously File content: ', data);
});
// Synchronous method (avoid for large files)
try {
    const data = fs.readFileSync('example.txt', 'utf8');
    console.log(' Synchronously File content:', data);
} catch (err) {
    console.error('Error reading file:', err);
}

// Writting a file 
// Asynchronous file write
const data = 'Hello, world!';
fs.writeFile('sample.txt', data, 'utf8', (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written successfully');
});

// Synchronous file write (avoid for large files)
try {
    fs.writeFileSync('sample.txt', data, 'utf8');
    console.log('File written successfully');
} catch (err) {
    console.error('Error writing to file:', err);
}

// Appending in a file 
// Asynchronous file append
const content = 'New content to append';
fs.appendFile('AppendFile.txt', content, 'utf8', (err) => {
    if (err) {
        console.error('Error appending to file:', err);
        return;
    }
    console.log('Content appended to file');
});
// Synchronous file append (avoid for large files)
try {
    fs.appendFileSync('AppendFile.txt', content, 'utf8');
    console.log('Content appended to file');
} catch (err) {
    console.error('Error appending to file:', err);
}

//Deleting a file 
fs.unlink('example.txt', (err) => {
    if (err) {
        console.error('Error deleting file:', err);
        return;
    }
    console.log('File deleted successfully');
});

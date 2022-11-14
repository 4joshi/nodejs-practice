const path = require('path');

console.log(path.sep);

const dir = '../Practice';
const file = 'app1.js';

const pathToFile = path.join(dir, file);
console.log(dir);
console.log(file);
console.log(pathToFile);

console.log(path.resolve(pathToFile));
const path = require('path');

console.log(path.sep);

const dir = '../nodejs-practice';
const file = 'app1.js';

const pathToFile = path.join(dir, file);
console.log(dir);
console.log(file);
console.log(pathToFile);

const absolutePath = path.resolve(pathToFile);
console.log(absolutePath);

console.log(path.basename(absolutePath));

//Path Parse - to give an object with various info about the path provided as argument
console.log(path.parse(__filename));

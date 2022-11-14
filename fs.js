const fs = require('fs');
const path = require('path');

const dir = './temp'
const fileToWrite = 'writtenFile.txt'
const filePath = path.join(dir, fileToWrite);

fs.writeFileSync(filePath, "Some content to be written");

const dataReadFromFile = fs.readFileSync(filePath, 'utf-8');
console.log(dataReadFromFile);

// ----------------------------------- //

const fileToWriteAsync = 'writtenFileAsync.txt';
const filePathAsync = path.join(dir, fileToWriteAsync);

fs.writeFile(filePathAsync, "Take some temp content from here", (err)=>{
    if(!err){
        console.log("Async file write complete");
    }
    else console.log("Error during Async file write");
})

fs.readFile(filePathAsync, 'utf-8', (err, data)=>{
    if(!err){
        console.log(data);
    }
    else console.log("Error during Async File Read");
})
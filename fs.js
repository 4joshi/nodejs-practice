const fs = require('fs');
const path = require('path');

const dir = './temp'
const fileToWrite = 'writtenFile.txt'
const filePath = path.join(dir, fileToWrite);

console.log(`Writing data to file ${filePath}. If file already present, then overwriting its content..`);
fs.writeFileSync(filePath, "Some content to be written");

const dataReadFromFile = fs.readFileSync(filePath, 'utf-8');
console.log("Following is the data (read synchronously):", dataReadFromFile);

// ----------------------------------- //

const fileToWriteAsync = 'writtenFileAsync.txt';
const filePathAsync = path.join(dir, fileToWriteAsync);

fs.writeFile(filePathAsync, "Take some temp content from here", (err)=>{
    if(err){
        console.log("Error during Async file write");    
    }
    
    console.log("Async file write complete");
})

fs.readFile(filePathAsync, 'utf-8', (err, data)=>{
    if(err){
        console.log("Error during Async File Read")
    }
    
    console.log("Following is the data (read asynchronously):", data);
})
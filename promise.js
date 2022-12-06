const fs = require('fs');


//self-written promise
const getText = async (path) => {
    return new Promise((resolve, reject)=>{
        fs.readFile(path, 'utf-8', (err, data)=>{
            if(err){
                reject(err);
            }
            else{
                resolve(data);
            }
        })
    })
}

getText('./temp/writtenFile.txt').then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
});
//

//util function - promisify
const util = require('util');

const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

    //better non-blocking way of writing the above blocking code

const readAndWrite = async () => {
    try{
        const file1 = await readFilePromise('./temp/read1.txt', 'utf-8');
        const file2 = await readFilePromise('./temp/read2.txt', 'utf-8');
        await writeFilePromise('./temp/writeFilePromise.txt', `${file1} ${file2}`);
    }catch(error){
        console.log('Util promises usage failed');
    }
}    

readAndWrite();
//

//promise version of module functions
const {readFile, writeFile} = require('fs').promises;

const readAndWrite2 = async () => {
    try{
        const file1 = await readFile('./temp/read2.txt', 'utf-8');
        const file2 = await readFile('./temp/read3.txt', 'utf-8');
        await writeFile('./temp/writeFilePromise2.txt', `${file1} ${file2}`);
    }catch(error){
        console.log('promise version of module functions usage failed');
    }
}    

readAndWrite2();
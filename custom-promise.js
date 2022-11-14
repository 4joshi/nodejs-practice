const fs = require('fs');

const getText = (path) => {
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
})
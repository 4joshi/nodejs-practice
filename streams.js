const {createReadStream} = require('fs');

const stream = createReadStream('./temp/readUsingStream.txt', {highWaterMark:30000, encoding:'utf-8'});

stream.on('data', (data)=>{
    console.log(data);
});

stream.on('error', (err)=>{
    console.log(err);
});
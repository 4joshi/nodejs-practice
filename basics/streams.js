const {createReadStream} = require('fs');

const stream = createReadStream('./temp/readUsingStream.txt', {highWaterMark:30000, encoding:'utf-8'});

stream.on('data', (data)=>{
    console.log(data);
});

stream.on('error', (err)=>{
    console.log(err);
});


// Read and Write stream with http to send large data usign stream
const http = require('http');

//HTTP connections are streams
http.createServer((req, res)=>{
    const fileStream = createReadStream('./temp/readUsingStream.txt', {highWaterMark:30000, encoding:'utf-8'});

    //When readstream opens the file, open event is emitted
    fileStream.on('open', ()=>{
        //pipe is a method used to take a readable stream and connect it to a writeable stream
        fileStream.pipe(res);
        //Using this response object is setup as a writable Stream, and we can send the data to the client
    });

    fileStream.on('error', ()=>{
        console.log("Some error occured while reading from file stream");
    })

}).listen(3008);
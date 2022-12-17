const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === "/about"){
        res.write("Some content related to about");
    }
    else if(req.url === "/345"){
        res.write("Some content related to 345");
    }

    res.end("Some sample data");
});

server.listen(3000, ()=>{
    console.log('Server listening on port 3000');
})
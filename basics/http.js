const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        //blocking code
        setTimeout(()=>{
            res.write(`<h1>Home page</h1>`);
            res.write('Additional data');
            res.end();
            console.log("Proessing complete");
        }, 5000);
    }
    else if(req.url === '/about'){
        res.end(`<h1>About page</h1>`);
    }
    else{
        res.write(`<h1>404 not found</h1>`);
        res.end();
    }
})

server.listen(3005, ()=>{
    console.log("Server is listening on port 3005");
})
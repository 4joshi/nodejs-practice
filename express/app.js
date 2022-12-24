const express = require('express'); //returns a function

const app = express();


app.get('/', (req,res)=>{
    res.writeHead(200, {
        'content-type' : 'text/html'
    })
    res.end('<h1>HomePage</h1>');
});

app.all('*', (req,res)=>{
    res.writeHead(404, {
        'content-type' : 'text/html'
    })
    res.end('<h1>Error Page</h1>');
});


app.listen(5000);


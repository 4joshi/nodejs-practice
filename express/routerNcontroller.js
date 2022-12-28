const express = require('express'); //returns a function
const products = require('./routes/products');
const logger = require('./logger');

const app = express();

app.use(express.json());
app.use([logger]);

app.use('/api/v1/products', products);

app.all('*', (req,res)=>{
    res.writeHead(404, {
        'content-type' : 'text/html'
    });
    res.end('<h1>Error Page</h1>');
});

app.listen(5000);


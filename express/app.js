const express = require('express'); //returns a function
const authorize = require('./authorize');
const products = require('./data/products');
const logger = require('./logger');

const app = express();

// app.use(logger); //middleware need not be passed to all requests when use is used
// app.use('/api/v1/products', authorize); //run middleware for only applicable paths

//Multiple middleware functions can be added to an array - In the desired order
app.use([logger, authorize]);

// app.get('/', logger, (req,res)=>{
app.get('/', (req,res)=>{    
    res.writeHead(200, {
        'content-type' : 'text/html'
    });
    res.end('<h1>HomePage</h1>');
});

//Query Parameters
// app.get('/api/v1/products/allProducts', logger, (req, res)=>{
app.get('/api/v1/products/allProducts', (req, res)=>{
    console.log(req.user);

    const searchTerm = req.query.searchTerm;
    let newProducts = products.map(({title, description, price})=>{
        return {title, description, price};
    });
    
    if(searchTerm){
        newProducts = newProducts.filter((product)=>{
            return product.title.startsWith(searchTerm);
        });
    }

    res.json(newProducts);
});

//Route Parameter
// app.get('/api/v1/products/:productId', logger, (req, res)=>{
app.get('/api/v1/products/:productId', (req, res)=>{
    console.log(req.params);
    const curProduct = products.filter((product)=>{
        return product.id === Number(req.params.productId);
    });

    res.json(curProduct);
});

// app.all('*', logger, (req,res)=>{
app.all('*', [logger, authorize], (req,res)=>{
    res.writeHead(404, {
        'content-type' : 'text/html'
    });
    res.end('<h1>Error Page</h1>');
});


app.listen(5000);


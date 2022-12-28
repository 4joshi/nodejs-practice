const products = require('../data/products');

const getProducts = (req, res) => {
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
};

const getProductById = (req, res)=>{
    const curProduct = products.filter((product)=>{
        return product.id === Number(req.params.productId);
    });

    res.json(curProduct);
};

const addProduct = (req, res)=>{
    const {product} = req.body;
    if(!products){
        res.status(400).send(`<h1>No product to add, please provide one in the request body<h1>`);
    }

    const newProducts = [...products, product];
    res.json(newProducts);
};

const updateProduct = (req, res)=>{
    const {name} = req.body;
    const {productId} = req.params;

    if(!name){
        res.status(400).send(`<h1>Nothing to update, resolving query</h1>`);
    }
    
    const newProducts = products.map((product)=>{
        if(product.id === Number(productId)){
            product.title = name;
        }

        return product;
    });
    
    res.json(newProducts);
};

const deleteProduct = (req, res)=>{
    const {productId} = req.params;
    
    const newProducts = products.filter((product)=>{
        return product.id !== Number(productId);
    });
    
    res.json(newProducts);
};

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};
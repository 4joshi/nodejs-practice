const express = require('express');
const router = express.Router();

const {getProducts, getProductById, addProduct, updateProduct, deleteProduct} = require('../controllers/products');

router.get('/', getProducts);
router.get('/:productId', getProductById);
router.post('/', addProduct);
router.put('/:productId', updateProduct);
router.delete('/:productId', deleteProduct);

module.exports = router;
const express = require('express');
const ProductsController = require('../controllers/productsController');

const router = express.Router();
const productsController = new ProductsController();

router.post('/products', productsController.createProduct);
router.get('/products', productsController.getProducts);
router.put('/products/:id', productsController.updateProduct);
router.delete('/products/:id', productsController.deleteProduct);
router.post('/products/order', productsController.placeOrder);

module.exports = router;
const express = require('express');
const ProductsController = require('../controllers/productsController');

const router = express.Router();
const productsController = new ProductsController();

// routes are relative to the mount point (app.use('/products', productRoute))
router.post('/', productsController.createProduct);
router.get('/', productsController.getProducts);
router.put('/:id', productsController.updateProduct);
router.delete('/:id', productsController.deleteProduct);
router.post('/order', productsController.placeOrder);

module.exports = router;

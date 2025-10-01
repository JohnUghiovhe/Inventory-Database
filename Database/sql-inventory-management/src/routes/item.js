const express = require('express');
const itemController = require('../controllers/itemController');

const itemRouter = express.Router();

itemRouter.post('/items', itemController.createItem);
itemRouter.get('/items', itemController.getAllItems);
itemRouter.get('/items/:id', itemController.getItemById);
itemRouter.put('/items/:id', itemController.updateItem);
itemRouter.delete('/items/:id', itemController.deleteItem);
itemRouter.post('/orders', itemController.createOrder);
itemRouter.get('/orders', itemController.getOrders);
itemRouter.get('/orders/:id', itemController.getOrderById);
itemRouter.put('/orders/:id', itemController.updateOrder);
itemRouter.delete('/orders/:id', itemController.deleteOrder);

module.exports = itemRouter;



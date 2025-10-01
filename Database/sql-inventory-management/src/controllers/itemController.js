const db = require('../models');
const itemModel = db.item;

// Controller functions

    async function getAllItems(req, res) {
        try {
            const items = await itemModel.findAll();
            res.json(items);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async function  getItemById(req, res) {
        try {
            const item = await itemModel.findByPk(req.params.id);
            if (!item) {
                return res.status(404).json({ error: 'Item not found' });
            }
            res.json(item);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async function createItem(req, res) {
        try {
            const item = await itemModel.create(req.body);
            res.status(201).json(item);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async function updateItem(req, res) {
        try {
            const item = await itemModel.findByPk(req.params.id);
            if (!item) {
                return res.status(404).json({ error: 'Item not found' });
            }
            await item.update(req.body);
            res.json(item);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async function deleteItem(req, res) {
        try {
            const item = await itemModel.findByPk(req.params.id);
            if (!item) {
                return res.status(404).json({ error: 'Item not found' });
            }
            await item.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async function createOrder(req, res) {
        try {
            const order = await db.order.create(req.body);
            res.status(201).json(order);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async function getOrders(req, res) {
        try {
            const orders = await db.order.findAll();
            res.json(orders);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async function getOrderById(req, res) {
        try {
            const order = await db.order.findByPk(req.params.id);
            if (!order) {
                return res.status(404).json({ error: 'Order not found' });
            }
            res.json(order);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async function updateOrder(req, res) {
        try {
            const order = await db.order.findByPk(req.params.id);
            if (!order) {
                return res.status(404).json({ error: 'Order not found' });
            }
            await order.update(req.body);
            res.json(order);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async function deleteOrder(req, res) {
        try {
            const order = await db.order.findByPk(req.params.id);
            if (!order) {
                return res.status(404).json({ error: 'Order not found' });
            }
            await order.destroy();
            res.status(204).send();
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

module.exports = { 
    getAllItems,
    getItemById,
    createItem,
    updateItem,
    deleteItem,
    createOrder,
    getOrders,
    getOrderById,
    updateOrder,
    deleteOrder
};
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Supplier',
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    description: {
        type: String,
        default: ''
    }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
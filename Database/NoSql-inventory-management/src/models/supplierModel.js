const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
    supplierName: {
        type: String,
        required: true
    },
    contactInfo: {
        email: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        }
    },
    productsSupplied: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
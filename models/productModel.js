const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: { type: String, required: true },
    brandName: String,
    category: String,
    productImage: [],
    description: String,
    price: Number,
    sellingPrice: Number
},
{
    timestamps : true
});

const productModel = mongoose.model('product', productSchema);

module.exports = productModel;
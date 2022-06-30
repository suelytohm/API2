const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    name: String,
    price: Number,
    active: Boolean,
    profit: Number

})

module.exports = Product
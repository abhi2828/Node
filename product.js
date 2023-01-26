const mongoose = require('mongoose')
let productSchema = new mongoose.Schema({
    name: String,
    price: Number,
    brand: String,
    category: String,
  });

  module.exports = new mongoose.model('product',productSchema)
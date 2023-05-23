const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
 
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: false,
  },
  
price: {
    type: Number,
    required: true,

  },
  countInStock:{
    type: String,
    required: true,
  },
  imageUrl:{
    type:String,
    required: true,
  }
},
{});

module.exports = mongoose.model("Product", ProductSchema);

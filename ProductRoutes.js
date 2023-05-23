const express = require("express");
const{ getAllProducts,getProductById, createProduct}=require("../Controller/ProductController")
const router = express.Router();



//@desc GET ALL PRODUCTS FROM DB
//@route GET/API/Products
//@access Public
router.get('/getAllProducts',getAllProducts);

//create a product
router.post('/addProduct',createProduct)

//@desc GET a product by id  FROM DB
//@route GET/API/Products
//@access Public
router.get('/:id',getProductById)
module.exports = router;


const Product=require('../Models/Product');

const getAllProducts=async(req,res)=>{
    try{
    const products=await Product.find({});
    res.json(products);
    }catch(error){
    res.status(500).json({message:"Fetching failed for products"})
    }

}
//////////////////////////////////////////////
const createProduct=async(req,res)=>{
    const{name,description,price,countInStock,imageUrl}=req.body
    try{
    const product=await Product.create({
        name,
        description,
        price,
        countInStock,
        imageUrl});
    res.status(200).json(product);
    }catch(error){
    res.status(404).json({message:"Create Failed for this product"})
    }

}
/////////////////////////////////////////////////////////////////////////////////
const getProductById=async(req,res)=>{
    try{
        if (req.params?.id){
    const product=await Product.findById(req.params.id);
    res.json(product);
    }else{
        res.status(404).json({message:'Product not found'})
    }
    }catch(error){
    res.status(500).json({message:"Getting product failed"})
    }

}

module.exports={getAllProducts,createProduct,getProductById}
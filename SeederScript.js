// const dotenv=require("dotenv");
// const mongoose=require('mongoose');
// const Product=require('./Models/Product');
// const productsData=require('./data/products')
// dotenv.config();
// mongoose.set("strictQuery",false);

// mongoose.connect(process.env.DBURL,
//     console.log("DB is connected")
//     )


//  importData = async()=>{
//     try{ 
//      await Product.deleteMany({});
//      await Product.insertMany({productsData});
//      console.log("Data Import Success")
//      process.exit();
//     }catch(error){
//  console.error("Error with data import");
//  process.exit(1);
//     } 
//  };
// importData();

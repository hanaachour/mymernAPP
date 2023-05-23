const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const dotenv=require("dotenv");
const UserRouter=require("./Routes/UserRouter");
const PostRouter=require("./Routes/PostRouter");
const ProductRouter=require("./Routes/ProductRoutes")
const fileUpload = require('express-fileupload');

mongoose.set("strictQuery",false);

const app=express();
dotenv.config();
app.use(cors());
app.use(fileUpload({useTempFiles:true}));
app.use(express.json({limit:"30mb",extended:true}));
app.use(express.urlencoded({limit:"30mb",extended:true}));

app.use("/users",UserRouter);
app.use("/post",PostRouter);
app.use("/product",ProductRouter);


mongoose.connect(process.env.DBURL,
console.log("DB is connected")
)

app.listen(process.env.URL,()=>{
    console.log(`Server is connected on ${process.env.URL}` )
})
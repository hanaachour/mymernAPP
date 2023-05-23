const express = require("express");
const {createPost}=require("../Controller/PostController");
const { AuthMiddleware }=require("../Middlewares/AuthMiddleware")
const router = express.Router();

router.post("/",AuthMiddleware,createPost)


module.exports = router;

const Post = require("../Models/Post");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.Cloud_name,
  api_key: process.env.Api_key,
  api_secret: process.env.Api_secret,
});

const createPost = async (req, res) => {
   
    const { id } = req.user;
    const { title, image } = req.body;
  try {
      const img = await cloudinary.uploader.upload(image, {
        folder: "images",
        resource_type: "auto",
      });
  
      const newPost = await Post.create({
        title,
        user: id,
        image: img?.secure_url,
      });
      res.status(200).json(newPost);
    } catch (error) {
      res.json(error);
    }

  };
  module.exports = { createPost };
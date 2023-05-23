const express = require("express");
const { Register,Login,getAllUsers, getSingleUser } = require("../Controller/UserController");

const { DataValidation } = require("../MiddleWares/DataValidation");
const { AuthMiddleware } = require("../Middlewares/AuthMiddleware");

const router = express.Router();
/////////you must put the controller{DataValidation} between request "/register " and the registration itself
router.post("/register",DataValidation, Register);///the user will post his request of registration
router.post("/login", Login);///if you put the middleware DataValidation here it will _display the message "Password shoud be at least 5" witch will help the hacker to login to your account so you can create another appropriate middleware or don't put anything
router.get("/",AuthMiddleware, getAllUsers);
router.get("/user",AuthMiddleware, getSingleUser);

////export routers////
module.exports = router;


/////1-definition of routes===>2- creation of Controllers===>3- import controller in the route===>import route in (index.js ===server.js


/////router.post("/register", ()=>{});au lieu d'écrire la logique ici , on va laisser que les routes ici , on va l'ecricre dans un autre component user component  pour que notre code reste clair
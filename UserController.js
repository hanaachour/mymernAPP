const{ validationResult}=require("express-validator")
const User=require("../Models/User");
const bcrypt=require("bcryptjs");
const jwt=require("jsonwebtoken");

////////////////////////////////////////////////////Register///////////////////////////////////////////////////////////////////////////
const Register=async (req,res)=>{
      try{

//validation from the requests

const errors = validationResult(req)
if (!errors.isEmpty()){
    return res.status(402).json({errors:errors.mapped()})
}
// verify the existance of the account
const{name,age,email,password,Role}=req.body;

const found= await User.findOne({email});
if (found){
    return res.status(401).json({message:"you have already registered"});
}


// /creation of user
///-1-Crypt password
const salt =bcrypt.genSaltSync(10);
const hashedPassword= await bcrypt.hash(password,salt);///chakchakli ekel passeword w 5arajli hashed passeword
///save user in DB
const newUser=await User.create({
    name,
    age,
    email,
    password:hashedPassword,
    Role
})
res.status(200).json(newUser);

} catch (error){
    res.status(500).json({message:error});
}
};

/////////////////////////////////////////////////////////////Login/////////////////////////////////////////////////////////////
const Login=async (req,res)=>{
    try{
    //validation from the request
const errors = validationResult(req)
if (!errors.isEmpty()){
    return res.status(402).json({errors: errors.mapped()})
}

     /// check if the user exists or not
    const{email,password}=req.body;
    const found=await User.findOne({email});
    if (!found){
        return res.status(402).json({message:"You have to register first"});
    };
    //// Check for password/////
    const isMatched=await bcrypt.compare(password,found.password);///compare fait le décryptage lel password
    if (!isMatched){
    return res.status(403).json({message:"Wrong email or password"})
};
    ///// Generation of a key token:when you login you generate token (token(3andha une durée de validité (expires in)) hia bidha id ema crypté )
    const token=await jwt.sign({id:found._id},process.env.SECRET,  ///process.env.secret : the store of the generated token
       { expiresIn:"30d",
    })
    res.status(200).json({found,token})
    }catch(error){
        res.status(500).json({message: error});
    }
    }
/////////////////////
const getAllUsers = async (req, res) => {
    console.log(req.user)
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };
  /////////////////
  const getSingleUser = async (req, res) => {
    try {
      const { id } = req.user;
      const user = await User.findById(id).populate("posts");////////populate: afficher la liste des posts que l'utilisateur à publié("posts":user.model:user.schema:virtual)
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  };

    module.exports={Register,Login,getAllUsers,getSingleUser};




/////// intall  "npm i express-validator bcryptjs jsonwebtoken"
/////// middlewares that chek data of the input than 

//// middleware (express handler) gere status des erreurs 
const { body } = require("express-validator");/// using the middleware express-validator

//////you will validate the body that's why we entered const {body}

exports.DataValidation = [ body("email", "Please put a valid email").isEmail(),/////methode prédéfinie from express-validator
  body("password","Password shoud be at least 5").isLength({min:5}),
];

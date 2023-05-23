const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  //////dr:different role, default role :"user"/////////////////
  Role: {
    type: String,
    dr: ["user", "admin"],
    default: "user",
  },
},
{
  toJSON: { virtuals: true },//////
  toObject: { virtuals: true },
  timestamps: true,
}


);

UserSchema.virtual("posts", {
  ref: "Post",
  foreignField: "user",
  localField: "_id",
});


///export collection we nameed it AuthUser: authentification user////
module.exports = mongoose.model("AuthUser", UserSchema);

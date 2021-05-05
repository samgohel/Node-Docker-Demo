const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: [true, "User Must Have Username"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "User Must Have Password"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;

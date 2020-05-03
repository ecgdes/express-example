const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    unique: true,
    min: 6,
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    min: 6,
    required: true,
    type: String
  }
});

module.exports = model("user", UserSchema);

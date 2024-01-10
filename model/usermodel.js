const mongoose = require("mongoose");
// Defining the User Schema
const UserSchema = mongoose.Schema({
  username: { type: String }, // Field to store the username as a string
  password: { type: String }, // Field to store the password as a string
});

const USER = mongoose.model("USER", UserSchema); // Creating the USER model based on the UserSchema

module.exports = USER; // Exporting the USER model for use in other parts of the application

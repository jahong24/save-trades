const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  id: String, // User's unique ID
  name: String // User's name
});

module.exports = userSchema;

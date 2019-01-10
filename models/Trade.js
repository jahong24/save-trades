const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = require("./User");

const tradeSchema = new Schema({
  id: String, // The unique ID of the trade
  type: String, // Trade type, buy or sell
  user: Object, // User responsible for the trade
  symbol: String, // The stock symbol
  shares: Number, // Total number of shares traded
  price: Number, // Price of one share of stock
  timestamp: Date // Timestamp for the saved trade
});

mongoose.model("trades", tradeSchema);

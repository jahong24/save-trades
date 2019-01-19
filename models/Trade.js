const mongoose = require("mongoose");
const { Schema } = mongoose;

const tradeSchema = new Schema({
  action: String, // Trade type, buy or sell
  quantity: Number, // Total number of shares traded
  symbol: String, // The stock symbol
  price: Number, // Price of one share of stock
  created: String // Timestamp for the saved trade
});

mongoose.model("trades", tradeSchema);

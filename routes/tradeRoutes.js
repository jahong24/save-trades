const mongoose = require("mongoose");

const Trade = mongoose.model("trades");

module.exports = app => {
  // Erasing all the trades
  app.get("/erase", (req, res) => {
    res.send({ trades: "DELETE all trades" });
  });

  // Adding new trades
  app.post("/trades", async (req, res) => {
    const { id, type, user, symbol, shares, price } = req.body;

    const trade = new Trade({
      id,
      type,
      user,
      symbol,
      shares,
      price,
      timestamp: Date.now()
    });

    try {
      await trade.save();
      res.send({ trades: "POST a trade" });
    } catch (err) {
      res.status(422).send(err);
    }
  });

  // Returning all trades
  app.get("/trades", (req, res) => {
    Trade.find((err, trades) => {
      if (err) return console.error(err);
      res.send(trades);
    });
  });

  app.get("/trades/users/userId", (req, res) => {
    res.send({ trades: "GET all trades performed by userId" });
  });
};

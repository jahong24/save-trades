const mongoose = require("mongoose");

const Trade = mongoose.model("trades");

module.exports = app => {
  // Erasing all the trades
  app.get("/api/erase", async (req, res) => {
    await Trade.deleteMany();
    res.status(200).send({ message: "Erase all trades" });
    return;
  });

  // Erase a trade given _id
  app.get("/api/erase/:id", async (req, res) => {
    try {
      await Trade.deleteOne({ _id: req.params.id });
      res.status(200).send({ message: "Saved order erased" });
      return;
    } catch (err) {
      res.status(404).send({ message: "Requested trade does not exist" });
      return;
    }
  });

  // Adding new trades
  app.post("/api/trades", async (req, res) => {
    const { action, quantity, symbol, price } = req.body;

    const trade = new Trade({
      action,
      quantity,
      symbol: symbol.toUpperCase(),
      price: parseFloat(price).toFixed(2),
      created: new Date().toLocaleString()
    });

    try {
      await trade.save();
      res.status(201).send(trade);
      return;
    } catch (err) {
      res.status(422).send(err);
      return;
    }
  });

  // Return all trades sorted in ascending order by created timestamp
  app.get("/api/trades", async (req, res) => {
    const trades = await Trade.find().sort({ created: 1 });
    res.status(200).send(trades);
    return;
  });

  // Return the trades filtered by the symbol, sorted in ascending order by created timestamp
  app.get("/api/trades/:symbol", async (req, res) => {
    const trades = await Trade.find({
      symbol: req.params.symbol.toUpperCase()
    }).sort({
      created: 1
    });

    // If trade does not exist for symbol, then return 404 response
    if (trades.length === 0) {
      res.status(404).send({ message: "Requested symbol does not exist" });
      return;
    }

    res.status(200).send(trades);
    return;
  });
};

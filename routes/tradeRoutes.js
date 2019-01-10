const mongoose = require("mongoose");

const Trade = mongoose.model("trades");

module.exports = app => {
  // Erasing all the trades
  app.get("/erase", async (req, res) => {
    await Trade.deleteMany();
    res.status(200).send({ message: "Erase all trades" });
    return;
  });

  // Adding new trades
  app.post("/trades", async (req, res) => {
    const { id, type, user, symbol, shares, price } = req.body;

    // Check if trade exists for given id
    const tradeCount = await Trade.countDocuments({ id });

    // If trade exists, then return 400 response
    if (tradeCount === 1) {
      res.status(400).send({ message: "Trade with same id already exists" });
      return;
    }

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
      res.status(201).send(trade);
      return;
    } catch (err) {
      res.status(422).send(err);
      return;
    }
  });

  // Return all trades sorted in ascending order by id
  app.get("/trades", async (req, res) => {
    const trades = await Trade.find().sort({ id: 1 });

    res.status(200).send(trades);
    return;
  });

  // Return the trades filtered by the user ID, sorted in ascending order by id
  app.get("/trades/users/:userId", async (req, res) => {
    const trades = await Trade.find({
      "user.id": parseInt(req.params.userId)
    }).sort({
      id: 1
    });

    if (trades.length === 0) {
      res.status(404).send({ message: "Requested user does not exist" });
      return;
    }

    res.status(200).send(trades);
    return;
  });
};

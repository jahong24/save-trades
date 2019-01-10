const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const keys = require("./config/keys");

require("./models/Trade");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(bodyParser.json());

require("./routes/tradeRoutes")(app);
//require("./routes/stockRoutes")(app);

const PORT = 5000;
app.listen(PORT);

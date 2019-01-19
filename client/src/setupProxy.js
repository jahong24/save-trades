const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(proxy("/api/trades", { target: "http://localhost:5000" }));
  app.use(proxy("/api/erase", { target: "http://localhost:5000" }));
};

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import ShowTrades from "./ShowTrades";
import ShowTradesId from "./ShowTradesId";
import TradeForm from "./Trades/TradeForm";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={ShowTrades} />
          <Route exact path="/:userId" component={ShowTradesId} />
          <Route exact path="/trades/new" component={TradeForm} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

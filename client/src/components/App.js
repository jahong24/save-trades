import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";
import ShowTrades from "./ShowTrades";
import ShowTradesId from "./ShowTradesId";

class App extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/:userId" component={ShowTradesId} />
            <Route exact path="/" component={ShowTrades} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

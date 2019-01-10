import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";

class App extends Component {
  componentDidMount() {
    this.props.fetchTrades();
  }

  renderTrades(trades) {
    return _.map(this.props.trades, trade => {
      return (
        <li key={trade.id}>
          id: {trade.id}, price: {trade.price}, shares: {trade.shares}, symbol:{" "}
          {trade.symbol}, type: {trade.type}, name: {trade.user.name}, price:{" "}
          {trade.price}
        </li>
      );
    });
  }

  render() {
    console.log(this.props.trades);
    return (
      <div>
        <h1>Saved Trade Orders</h1>
        <ul>{this.renderTrades(this.props.trades)}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { trades: state.trades };
};

export default connect(
  mapStateToProps,
  actions
)(App);

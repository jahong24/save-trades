import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";
import TradeCard from "./TradeCard";

class ShowTrades extends Component {
  componentDidMount() {
    this.props.fetchTrades();
  }

  renderTrades(trades) {
    if (trades.length === 0) {
      return (
        <div className="text-center pt-5 text-danger">
          <h2>No saved trade orders</h2>
        </div>
      );
    }

    return _.map(this.props.trades, trade => {
      return (
        <li key={trade.id}>
          <TradeCard trades={trade} />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul
          style={{ listStyleType: "none", display: "table", margin: "0 auto" }}
        >
          {this.renderTrades(this.props.trades)}
        </ul>
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
)(ShowTrades);

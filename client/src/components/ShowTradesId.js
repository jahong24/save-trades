import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";
import TradeCard from "./TradeCard";

class ShowTradesId extends Component {
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.userId !== newProps.match.params.userId) {
      this.props.fetchTradesId(newProps.match.params.userId);
    }
  }

  componentDidMount() {
    this.props.fetchTradesId(this.props.match.params.userId);
  }

  renderTrades(trades) {
    if (trades.length === 0) {
      return (
        <div className="text-center pt-5 text-danger">
          <h2>No trades found for this Id</h2>
        </div>
      );
    }

    return _.map(this.props.tradesById, trade => {
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
          {this.renderTrades(this.props.tradesById)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { tradesById: state.tradesById };
};

export default connect(
  mapStateToProps,
  actions
)(ShowTradesId);

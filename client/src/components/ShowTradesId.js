import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";
import TradeCard from "./TradeCard";

class ShowTradesId extends Component {
  componentWillReceiveProps(newProps) {
    if (this.props.match.params.symbol !== newProps.match.params.symbol) {
      this.props.fetchTradesId(newProps.match.params.symbol);
    }
  }

  componentDidMount() {
    this.props.fetchTradesId(this.props.match.params.symbol);
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
        <li key={trade._id} className="list-group-item">
          <TradeCard trades={trade} />
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group list-group-flush mx-auto">
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

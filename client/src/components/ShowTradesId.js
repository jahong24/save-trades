import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";

class ShowTradesId extends Component {
  componentDidMount() {
    this.props.fetchTradesId(this.props.match.params.userId);
  }

  renderTrades(trades) {
    /*
    if (trades.length == 0) {
      return (
        <div className="text-center pt-5 text-danger">
          <h2>No trades found for this Id</h2>
        </div>
      );
    }
    */
    return _.map(this.props.tradesById, trade => {
      return (
        <li key={trade.id}>
          <div className="card" style={{ width: "50em" }}>
            <h4 className="card-title">Id: {trade.id}</h4>
            <h6 className="card-subtitle mb-2 text-success">
              Symbol: {trade.symbol}
            </h6>
            <h6 className="card-subtitle mb-2 ">Price: {trade.price}</h6>
            <h6 className="card-subtitle mb-2 ">Shares: {trade.shares}</h6>
            <p className="card-text text-muted">
              Type: {trade.type} <br /> Name: {trade.user.name}
            </p>
          </div>
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

import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";

class ShowTrades extends Component {
  componentDidMount() {
    this.props.fetchTrades();
  }

  renderTrades(trades) {
    return _.map(this.props.trades, trade => {
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
              Type: {trade.type} <br /> Name: {trade.user.name} <br /> UserId:{" "}
              {trade.user.id}
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

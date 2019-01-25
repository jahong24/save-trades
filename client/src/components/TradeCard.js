import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";

const QUOTE_URL = "https://finance.yahoo.com/quote/";

class TradeCard extends Component {
  render() {
    const { _id, symbol, action, quantity, price, created } = this.props.trades;
    return (
      <div className="card">
        <div className="card-header float-left">
          <div className="float-left">
            <h1 className="card-title">{symbol}</h1>
          </div>
          <div className="float-right">
            <h6 className="card-title text-muted">{action}</h6>
          </div>
        </div>
        <div className="card-body">
          <h6 className="card-subtitle mb-2">Quantity: {quantity}</h6>
          <h6 className="card-subtitle mb-2">Price: {price}</h6>
          <p className="card-text text-muted">{created}</p>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${QUOTE_URL}${symbol}`}
            className="btn btn-success mr-3"
          >
            Check Quote
          </a>
          <button
            className="btn btn-secondary float-right"
            onClick={() => this.props.deleteTrade(_id)}
            style={{ display: this.props.showDelete }}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(TradeCard);

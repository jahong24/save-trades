import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import _ from "lodash";
import TradeCard from "./TradeCard";
import { Link } from "react-router-dom";

class ShowTrades extends Component {
  componentDidMount() {
    this.props.fetchTrades();
  }

  renderTrades(trades) {
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
        <div>
          <ul
            style={{
              listStyleType: "none",
              display: "table",
              margin: "0 auto"
            }}
          >
            {this.renderTrades(this.props.trades)}
          </ul>
        </div>
        <div style={{ position: "fixed", bottom: "20px" }}>
          <Link to="/trades/new">
            <i
              className="material-icons"
              style={{ fontSize: "60px", color: "#FB8C00" }}
            >
              add_box
            </i>
          </Link>
        </div>
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

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
      console.log(trade);
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
        <div>
          <ul className="list-group list-group-flush mx-auto">
            {this.renderTrades(this.props.trades)}
          </ul>
        </div>
        <div className="float-right">
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
